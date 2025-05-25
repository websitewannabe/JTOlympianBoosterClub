import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CrossCountry from "./pages/CrossCountry";
import Football from "./pages/Football";
import GirlsVolleyball from "./pages/GirlsVolleyball";
import Wrestling from "./pages/Wrestling";
import Cheer from "./pages/Cheer";
import CheerCompetition from "./pages/CheerCompetition";
import CheerSideline from "./pages/CheerSideline";
import Privacy from "./pages/Privacy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import NotFound from "./pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cross-country" component={CrossCountry} />
      <Route path="/football" component={Football} />
      <Route path="/girls-volleyball" component={GirlsVolleyball} />
      <Route path="/wrestling" component={Wrestling} />
      <Route path="/cheer" component={Cheer} />
      <Route path="/cheer/competition" component={CheerCompetition} />
      <Route path="/cheer/sideline" component={CheerSideline} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/accessibility-statement" component={AccessibilityStatement} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Olympian Booster Club</title>
          <meta name="description" content="The Olympian Booster Club supports and enhances the athletic experience for all Olympian High School student-athletes through fundraising, volunteerism, and community engagement." />
        </Helmet>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;