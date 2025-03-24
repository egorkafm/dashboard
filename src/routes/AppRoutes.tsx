import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout, Login, Dashboard, Profile } from "./index";
import { PublicRoute } from "../components/PublicRoute";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
    </Route>
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);
