export type CodeUpdateRequest = {
  filePath: string;
  lineStart: number;
  lineEnd: number;
  newCode: string;
};

export type CodeContextResponse = {
  filePath: string;
  startLine: number;
  endLine: number;
  totalLines: number;
  snippet: string;
};

export async function fetchCodeContext(input: {
  filePath: string;
  line: number;
  radius?: number;
}): Promise<CodeContextResponse> {
  const response = await fetch("/api/code/context", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `code context failed: ${response.status} ${response.statusText}${text ? ` - ${text}` : ""}`,
    );
  }

  return (await response.json()) as CodeContextResponse;
}

export async function postCodeUpdate(body: CodeUpdateRequest): Promise<void> {
  const response = await fetch("/api/code/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `code update failed: ${response.status} ${response.statusText}${text ? ` - ${text}` : ""}`,
    );
  }
}
