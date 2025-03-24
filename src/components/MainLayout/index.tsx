import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  DashboardOutlined,
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Drawer, Flex } from "antd";
import { Logo } from "../Logo";
import { ConfirmModal } from "../ConfirmModal";
import { useMainLayout } from "./hooks/useMainLayout";

import styles from "./style.module.scss";

const { Header, Content, Footer, Sider } = Layout;

export const MainLayout: FC = () => {
  const {
    isMobile,
    drawerOpen,
    setDrawerOpen,
    isModalOpen,
    handleLogout,
    close,
    confirmLogout,
    activePath,
  } = useMainLayout();

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Logo isMobile={isMobile} />
        {!isMobile && (
          <Flex align="center" justify="center" gap="16px">
            <Link to="/profile">
              <UserOutlined style={{ fontSize: 24 }} />
            </Link>
            <Button type="primary" onClick={handleLogout} block>
              Sign out
            </Button>
          </Flex>
        )}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 20 }} />}
            onClick={() => setDrawerOpen(true)}
          />
        )}
      </Header>

      {isMobile && (
        <Drawer
          placement="right"
          closable={false}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          width={240}
          style={{ padding: 0 }}
        >
          <div className={styles.drawerContainer}>
            <div className={styles.drawerHeader}>
              <Button
                type="text"
                icon={<CloseOutlined style={{ fontSize: 20 }} />}
                onClick={() => setDrawerOpen(false)}
              />
            </div>
            <div className={styles.drawerMenu}>
              <Link to="/dashboard" onClick={() => setDrawerOpen(false)}>
                Dashboard
              </Link>
              <Link to="/profile" onClick={() => setDrawerOpen(false)}>
                My profile
              </Link>
              <Button type="primary" onClick={handleLogout} block>
                Sign out
              </Button>
            </div>
          </div>
        </Drawer>
      )}

      <Layout>
        {!isMobile && (
          <Sider width={200} theme="dark">
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[activePath]}
              className={styles.sideMenu}
              items={[
                {
                  key: "dashboard",
                  icon: <DashboardOutlined />,
                  label: <Link to="/dashboard">Dashboard</Link>,
                },
              ]}
            />
          </Sider>
        )}
        <Layout>
          <Content className={styles.content}>
            <div className={styles.contentContainer}>
              <Outlet />
            </div>
          </Content>
          <Footer className={styles.footer}>
            © Yehor Lashchenko, 2025. All rights reserved.
          </Footer>
        </Layout>
      </Layout>

      <ConfirmModal
        open={isModalOpen}
        onCancel={close}
        onConfirm={confirmLogout}
        title="Are you sure you want to sign out?"
      />
    </Layout>
  );
};
