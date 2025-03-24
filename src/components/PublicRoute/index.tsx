import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { JSX } from "react";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = !!token;

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};
