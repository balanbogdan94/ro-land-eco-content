import { ApplicationInsights, ITelemetryItem } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

export const reactPlugin = new ReactPlugin();

const getAnonymousUserId = (): string => {
  const STORAGE_KEY = 'ro-land-anon-id';

  try {
    let anonId = localStorage.getItem(STORAGE_KEY);

    if (!anonId) {
      anonId = 'anon_' + crypto.randomUUID().replace(/-/g, '').substring(0, 16);
      localStorage.setItem(STORAGE_KEY, anonId);
    }

    return anonId;
  } catch {
    console.warn('localStorage not available, using session-only ID');
    return 'anon_' + Math.random().toString(36).substring(2, 18);
  }
};

const anonymousUserId = getAnonymousUserId();
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

appInsights.addTelemetryInitializer((envelope: ITelemetryItem) => {
  envelope.tags = envelope.tags || {};
  envelope.tags['ai.user.id'] = anonymousUserId;
  envelope.tags['ai.session.id'] = anonymousUserId + '_' + Date.now();
  envelope.tags['ai.cloud.role'] = 'ui';
  envelope.tags['ai.cloud.roleInstance'] = 'browser';
});

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

export const getAnonymousId = () => anonymousUserId;

if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).getAnonymousId = getAnonymousId;
  console.log('🆔 Anonymous ID:', anonymousUserId);
  console.log('🎯 Run getAnonymousId() in console to get anonymous ID');
}
