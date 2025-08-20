import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

export const reactPlugin = new ReactPlugin();

const appInsightsConnectionString = import.meta.env.VITE_APP_INSIGHTS_CONNECTION_STRING;

if (!appInsightsConnectionString) {
  console.warn(
    'VITE_APP_INSIGHTS_CONNECTION_STRING is not defined. App Insights will not be initialized.'
  );
}

export const appInsights = new ApplicationInsights({
  config: {
    connectionString: appInsightsConnectionString,
    enableAutoRouteTracking: true,
    autoTrackPageVisitTime: true,
    maxBatchInterval: 15000,
    excludeRequestFromAutoTrackingPatterns: [
      /\/sockjs\//,
      /\/health$/,
      /fonts\.gstatic\.com/,
      /doubleclick\.net/,
      /googleads/,
    ],
    extensions: [reactPlugin],
    samplingPercentage: 100,
  },
});

// Inițializează doar dacă avem connection string
if (appInsightsConnectionString) {
  try {
    appInsights.loadAppInsights();
    console.log('App Insights initialized successfully');
    console.log('Connection string:', appInsightsConnectionString.substring(0, 50) + '...');
  } catch (error) {
    console.error('Failed to initialize App Insights:', error);
  }
} else {
  console.warn('App Insights not initialized - missing connection string');
}
