import React from "react";
import { NotificationProvider } from "./providers/NotificationProvider";
import { AppErrorBoundary } from "./components/ErrorBoundary";
import { AppRoutes } from "./routes/AppRoutes";

import "./styles/App.sass";

function App() {
  return (
    <AppErrorBoundary>
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </AppErrorBoundary>
  );
}

export default App;
