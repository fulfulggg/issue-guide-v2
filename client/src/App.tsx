import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Training from "./pages/Training";
import LifeChanging from "./pages/LifeChanging";
import Checklist from "./pages/Checklist";
import PhaseGuide from "./pages/PhaseGuide";
import MasterDetail from "./pages/MasterDetail";
import MastersQuestions from "./pages/MastersQuestions";
import Library from "./pages/Library";
import Builder from "./pages/Builder";
// Issue Guide pages
import IssueGuideHome from "./pages/issueGuide/IssueGuideHome";
import Learn from "./pages/issueGuide/Learn";
import Reference from "./pages/issueGuide/Reference";
import Practice from "./pages/issueGuide/Practice";
import Evaluate from "./pages/issueGuide/Evaluate";

export function AppRoutes({
  includeBuilder = true,
}: {
  includeBuilder?: boolean;
}) {
  return (
    <Switch>
      {/* Main Route */}
      <Route path={"/"} component={IssueGuideHome} />
      
      {/* Question Mastery (Legacy) Routes */}
      <Route path={"/question-mastery"} component={Home} />
      <Route path={"/training"} component={Training} />
      <Route path={"/life-changing"} component={LifeChanging} />
      <Route path={"/checklist"} component={Checklist} />
      <Route path={"/phase-guide"} component={PhaseGuide} />
      <Route path="/master/:id" component={MasterDetail} />
      <Route path="/masters-questions" component={MastersQuestions} />
      <Route path={"/library"} component={Library} />

      {/* Issue Guide routes */}
      <Route path="/issue-guide" component={IssueGuideHome} />
      <Route path="/issue-guide/learn" component={Learn} />
      <Route path="/issue-guide/reference" component={Reference} />
      <Route path="/issue-guide/practice" component={Practice} />
      <Route path="/issue-guide/evaluate" component={Evaluate} />
      {includeBuilder ? <Route path={"/builder"} component={Builder} /> : null}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
