import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import Routing from "./routing/Routing";
import { WishlistProvider } from "./components/context/WishlistContext";
import { AuthProvider } from "./components/context/AuthContext";
import "./index.css";




// Initialize Sentry only if not already initialized (basic check)
// Note: Sentry.init doesn't return anything to check, but we can check if a global client exists
// or just wrap in a try-catch to suppress the specific error during development.
// However, the cleanest way for HMR is often to not re-init.

if (!window.sentryInitialized) {
  Sentry.init({
    dsn: "https://7599737665798d7c3460740648369c5d@o4510877206773760.ingest.us.sentry.io/4510877213655040",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration()
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/hyglamofficial\.com\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    // Enable logs to be sent to Sentry
    enableLogs: true
  });
  window.sentryInitialized = true;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
      <Routing />
    
    </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>
);
