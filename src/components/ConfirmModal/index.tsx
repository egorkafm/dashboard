import { Modal } from "antd";

interface ConfirmModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
}

export const ConfirmModal = ({
  open,
  onCancel,
  onConfirm,
  title,
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onConfirm}
      okText="Yes"
      cancelText="Cancel"
      centered
      closable={false}
      title={title}
    />
  );
};
