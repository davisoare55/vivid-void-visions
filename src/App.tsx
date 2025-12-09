import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GestaoPage from "./pages/GestaoPage";

const queryClient = new QueryClient();

import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import FacebookPixel from "@/components/FacebookPixel";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BookingProvider>
        <BookingModal />
        <WhatsAppButton />
        <FacebookPixel />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gestao" element={<GestaoPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
