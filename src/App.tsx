import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import StrategicPlan from "./pages/StrategicPlan";
import TacticalPlan from "./pages/TacticalPlan";
import OperationalPlan from "./pages/OperationalPlan";
import Terms from "./pages/reference/Terms";
import Normative from "./pages/reference/Normative";
import Procedures from "./pages/reference/Procedures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/strategic" element={<StrategicPlan />} />
            <Route path="/tactical" element={<TacticalPlan />} />
            <Route path="/operational" element={<OperationalPlan />} />
            <Route path="/reference/terms" element={<Terms />} />
            <Route path="/reference/normative" element={<Normative />} />
            <Route path="/reference/procedures" element={<Procedures />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
