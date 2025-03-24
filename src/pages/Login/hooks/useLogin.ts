import { message } from "antd";
import { useAuth } from "../../../hooks/useAuth";

export const useLogin = () => {
  const { login, loading } = useAuth();

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await login(values.username, values.password);
    } catch (error: any) {
      message.error(error.response?.data?.message || "Login failed");
    }
  };

  return { loading, handleLogin };
};
