import { FC } from "react";
import { Avatar, Flex, Descriptions } from "antd";
import { Drawer } from "../../../../components/Drawer";
import { User } from "../../../../api/types";

interface UserDrawerProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
}

export const UserDrawer: FC<UserDrawerProps> = ({ open, user, onClose }) => {
  return (
    <Drawer
      title="User Info"
      open={open}
      onClose={onClose}
      width={400}
      style={{ outline: "none" }}
    >
      {user && (
        <>
          <Flex justify="center" style={{ marginBottom: 24 }}>
            <Avatar size={100} src={user.image} />
          </Flex>
          <Descriptions column={1} bordered>
            <Descriptions.Item label="First Name">
              {user.firstName}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name">
              {user.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Username">
              {user.username}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
            <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
            <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
          </Descriptions>
        </>
      )}
    </Drawer>
  );
};
