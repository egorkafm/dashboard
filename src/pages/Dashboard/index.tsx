import { FC } from "react";
import { Typography } from "antd";
import { User } from "../../api/types";
import { Table } from "../../components/Table";
import { UserDrawer } from "./components/UserDrawer";
import { useAuth } from "../../hooks/useAuth";
import { useDashboard } from "./hooks/useDashboard";
import { getDashboardColumns } from "./columns";

export const Dashboard: FC = () => {
  const { user } = useAuth();
  const {
    data,
    loading,
    selectedUser,
    isOpen,
    handleRowClick,
    handleCloseDrawer,
    deleteUser,
  } = useDashboard();

  return (
    <>
      <Typography.Title level={2}>Welcome, {user?.firstName}!</Typography.Title>
      <Typography.Paragraph style={{ marginBottom: "24px" }}>
        This is your dashboard content.
      </Typography.Paragraph>

      <Table<User>
        columns={getDashboardColumns(deleteUser)}
        dataSource={data}
        loading={loading}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: "pointer" },
        })}
      />

      <UserDrawer
        open={isOpen}
        user={selectedUser}
        onClose={handleCloseDrawer}
      />
    </>
  );
};
