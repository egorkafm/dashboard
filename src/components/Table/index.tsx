import { Table as AntTable, TableProps as AntTableProps, Grid } from "antd";

interface Props<T extends { id: string | number }> extends AntTableProps<T> {}

export const Table = <T extends { id: string | number }>({
  ...props
}: Props<T>) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <div style={{ overflowX: "auto" }}>
      <AntTable
        {...props}
        rowKey={(record) => record.id}
        pagination={{
          responsive: true,
          showSizeChanger: true,
          showLessItems: true,
          pageSizeOptions: ["5", "10", "25"],
          defaultPageSize: 5,
          ...props.pagination,
        }}
        scroll={!screens.md ? { x: "max-content" } : undefined}
      />
    </div>
  );
};
