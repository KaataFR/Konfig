
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Configurations from "./pages/Configurations";
import Budget800 from "./pages/Budget800";
import Budget1000 from "./pages/Budget1000";
import Budget1500 from "./pages/Budget1500";
import Budget2000 from "./pages/Budget2000";
import Budget3000 from "./pages/Budget3000";
import Budget5000 from "./pages/Budget5000";
import Contact from "./pages/Contact";
import SitesRecommandes from "./pages/SitesRecommandes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Composant pour gérer le scroll en haut de page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/budget-800" element={<Budget800 />} />
          <Route path="/budget-1000" element={<Budget1000 />} />
          <Route path="/budget-1500" element={<Budget1500 />} />
          <Route path="/budget-2000" element={<Budget2000 />} />
          <Route path="/budget-3000" element={<Budget3000 />} />
          <Route path="/budget-5000" element={<Budget5000 />} />
          <Route path="/sites-recommandes" element={<SitesRecommandes />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
