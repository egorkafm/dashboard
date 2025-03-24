import { useEffect, useState, useCallback } from "react";
import {
  fetchUsers,
  deleteUser as deleteUserRequest,
} from "../../../api/dashboard/users";
import { User } from "../../../api/types";
import { useNotifier } from "../../../hooks/useNotifier";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { setUsers } from "../../../store/dashboardSlice";

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.dashboard.users);
  const { showSuccess, showError } = useNotifier();
  const { isOpen, open, close } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const fetched = await fetchUsers();
      dispatch(setUsers(fetched));
    } catch (err: any) {
      showError("Failed to load users", err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [dispatch, showError]);

  const deleteUser = useCallback(
    async (id: number) => {
      try {
        await deleteUserRequest(id);
        dispatch(setUsers(userList.filter((u) => u.id !== id)));
        showSuccess("User deleted");
      } catch (error: any) {
        showError("Delete failed", error.message || "Something went wrong");
      }
    },
    [userList, dispatch, showSuccess, showError],
  );

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    open();
  };

  const handleCloseDrawer = () => {
    setSelectedUser(null);
    close();
  };

  useEffect(() => {
    if (userList.length === 0) {
      loadUsers();
    }
  }, [loadUsers, userList.length]);

  return {
    data: userList,
    loading,
    selectedUser,
    isOpen,
    handleRowClick,
    handleCloseDrawer,
    deleteUser,
  };
};
