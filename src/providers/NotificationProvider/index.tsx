import { ReactNode, createContext, useContext } from "react";
import { notification } from "antd";
import type { NotificationInstance } from "antd/es/notification/interface";

const NotificationContext = createContext<NotificationInstance | null>(null);

export const useNotificationApi = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
