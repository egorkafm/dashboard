import { FC, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { notification } from "antd";

const ErrorFallback = ({ error }: FallbackProps) => {
  notification.error({
    message: "Unexpected Error",
    description: error.message,
    placement: "topRight",
  });

  return <div style={{ padding: 24 }}>Something went wrong.</div>;
};

export const AppErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("Caught by ErrorBoundary:", error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
