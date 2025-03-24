import { FC } from "react";
import { Form, Input, Button, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useLogin } from "./hooks/useLogin";

import styles from "./style.module.sass";

export const Login: FC = () => {
  const { handleLogin, loading } = useLogin();

  return (
    <div className={styles.loginContainer}>
      <Form
        name="login"
        className={styles.loginForm}
        onFinish={handleLogin}
        layout="vertical"
      >
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Login
        </Typography.Title>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please enter your username!" },
            { pattern: /^\S+$/, message: "No spaces allowed" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password!" },
            { pattern: /^\S+$/, message: "No spaces allowed" },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
