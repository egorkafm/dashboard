import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useAppSelector((state) => state.auth.token);

  const isAuthenticated = !!token;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
