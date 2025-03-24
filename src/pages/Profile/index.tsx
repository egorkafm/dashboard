import { FC } from "react";
import { Typography, Descriptions, Button, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAuth } from "../../hooks/useAuth";

import styles from "./style.module.scss";

export const Profile: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goBack = () => navigate("/dashboard");

  return (
    <div className={styles.profileWrapper}>
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={goBack}
        className={styles.backButton}
      >
        Back to Dashboard
      </Button>

      <Typography.Title level={2}>My profile</Typography.Title>

      {user ? (
        <>
          <div className={styles.avatarWrapper}>
            <Avatar size={120} src={user.image} alt={user.username} />
          </div>
          <Descriptions column={1} bordered size="middle">
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
          </Descriptions>
        </>
      ) : (
        <Typography.Text type="secondary">
          No user data available.
        </Typography.Text>
      )}
    </div>
  );
};
