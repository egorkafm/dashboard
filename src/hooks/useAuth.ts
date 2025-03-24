import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { useNotifier } from "./useNotifier";
import { loginRequest } from "../api/auth/auth";
import { RootState } from "../store";
import { loginSuccess, logoutAction } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { showError, showSuccess } = useNotifier();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { user, token } = useAppSelector((state: RootState) => state.auth);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);

      const data = await loginRequest(username, password);
      const { accessToken, ...userData } = data;

      dispatch(loginSuccess({ user: userData, token: accessToken }));
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("accessToken", accessToken);

      showSuccess("Login Successful", `Welcome back, ${userData.firstName}!`);
      navigate("/dashboard");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Invalid username or password";
      showError("Login Failed", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isAuthenticated = !!token;

  return { user, token, login, logout, loading, isAuthenticated };
};
