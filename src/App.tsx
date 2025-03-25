import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationProvider } from "./providers/NotificationProvider";
import { AppErrorBoundary } from "./components/ErrorBoundary";
import { AppRoutes } from "./routes/AppRoutes";

import "./styles/App.sass";

function App() {
  return (
    <AppErrorBoundary>
      <NotificationProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NotificationProvider>
    </AppErrorBoundary>
  );
}

export default App;
