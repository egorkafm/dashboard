import { useNotificationApi } from "../providers/NotificationProvider";

export const useNotifier = () => {
  const api = useNotificationApi();

  const showSuccess = (title: string, description?: string) => {
    api?.success({
      message: title,
      description,
      placement: "topRight",
      duration: 5,
    });
  };

  const showError = (title: string, description: string) => {
    api?.error({
      message: title,
      description,
      placement: "topRight",
      duration: 5,
    });
  };

  return { showSuccess, showError };
};
