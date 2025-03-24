import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "antd";
import { useAuth } from "../../../hooks/useAuth";
import { useDisclosure } from "../../../hooks/useDisclosure";

const { useBreakpoint } = Grid;

export const useMainLayout = () => {
  const { logout } = useAuth();
  const screens = useBreakpoint();
  const location = useLocation();
  const { isOpen: isModalOpen, open, close } = useDisclosure();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = !screens.md;
  const activePath = location.pathname.replace("/", "") || "dashboard";

  const handleLogout = () => {
    open();
  };

  const confirmLogout = () => {
    logout();
    close();
  };

  return {
    isMobile,
    drawerOpen,
    setDrawerOpen,
    isModalOpen,
    handleLogout,
    close,
    confirmLogout,
    activePath,
  };
};
