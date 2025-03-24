import { axiosInstance } from "../axiosInstance";
import { User } from "../types";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get("/users");
  return response.data.users;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};
