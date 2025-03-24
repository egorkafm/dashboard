import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { User } from "../../api/types";

export const getDashboardColumns = (onDelete: (id: number) => void) => {
  return [
    { title: "First Name", dataIndex: "firstName" },
    { title: "Last Name", dataIndex: "lastName" },
    { title: "Age", dataIndex: "age" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: User) => (
        <div onClick={(e) => e.stopPropagation()}>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
};
