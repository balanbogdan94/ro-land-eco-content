import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { NotFound } from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import {
  AppInsightsContext,
  AppInsightsErrorBoundary,
} from '@microsoft/applicationinsights-react-js';
import { reactPlugin, appInsights } from './services/appInsights';

const queryClient = new QueryClient();

export const App = () => (
  <AppInsightsContext.Provider value={reactPlugin}>
    <AppInsightsErrorBoundary
      appInsights={reactPlugin}
      onError={({ error }: { error: Error }) => {
        appInsights.trackException({ exception: error });
        return <h1>An error occurred</h1>;
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </AppInsightsErrorBoundary>
  </AppInsightsContext.Provider>
);
