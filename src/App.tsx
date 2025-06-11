
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Configurations from "./pages/Configurations";
import Budget600 from "./pages/Budget600";
import Budget1000 from "./pages/Budget1000";
import Budget1500 from "./pages/Budget1500";
import Budget2000 from "./pages/Budget2000";
import Budget2500 from "./pages/Budget2500";
import Budget4000 from "./pages/Budget4000";
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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/budget-600" element={<Budget600 />} />
          <Route path="/budget-1000" element={<Budget1000 />} />
          <Route path="/budget-1500" element={<Budget1500 />} />
          <Route path="/budget-2000" element={<Budget2000 />} />
          <Route path="/budget-2500" element={<Budget2500 />} />
          <Route path="/budget-4000" element={<Budget4000 />} />
          <Route path="/sites-recommandes" element={<SitesRecommandes />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
