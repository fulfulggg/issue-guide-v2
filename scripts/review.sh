#!/bin/bash
set -euo pipefail

# Usage:
#   scripts/review.sh <feature_name> <base_ref>
# Example:
#   scripts/review.sh cleanup-metaprompt origin/develop

FEATURE_NAME="${1:-}"
BASE_REF="${2:-}"

if [ -z "$FEATURE_NAME" ] || [ -z "$BASE_REF" ]; then
  echo "Usage: scripts/review.sh <feature_name> <base_ref>" >&2
  exit 2
fi

if ! command -v my-review >/dev/null 2>&1; then
  echo "Error: my-review command not found. Please install/setup 'my-review' and ensure it is on PATH." >&2
  exit 127
fi

REQ="docs/dev/${FEATURE_NAME}/requirements.md"
DES="docs/dev/${FEATURE_NAME}/design.md"
OUT="docs/dev/${FEATURE_NAME}/review.md"

if [ ! -f "$REQ" ] || [ ! -f "$DES" ]; then
  echo "Missing docs" >&2
  exit 3
fi

mkdir -p "docs/dev/${FEATURE_NAME}"

DIFF_BASE="$(mktemp "/tmp/review.${FEATURE_NAME}.XXXXXX")"
DIFF_FILE="${DIFF_BASE}.diff"
mv "$DIFF_BASE" "$DIFF_FILE"
trap 'rm -f "$DIFF_FILE"' EXIT

if ! git rev-parse --verify "$BASE_REF" >/dev/null 2>&1; then
  echo "Error: invalid base ref: $BASE_REF" >&2
  exit 4
fi

git diff --no-color "${BASE_REF}...HEAD" > "$DIFF_FILE"
if [ ! -s "$DIFF_FILE" ]; then
  echo "Error: empty diff for ${BASE_REF}...HEAD" >&2
  exit 5
fi

my-review - <<EOF_PROMPT | tee "$OUT"
You are a strict, independent code reviewer with zero prior context.

Context docs:
- ${REQ}
- ${DES}

Review ONLY the patch in ${DIFF_FILE}.

Output format:
A) Must-fix (blocking)
B) Should-fix
C) Optional
D) Suggested tests
E) Risk & rollback notes
EOF_PROMPT

echo "Saved review to: ${OUT}"
