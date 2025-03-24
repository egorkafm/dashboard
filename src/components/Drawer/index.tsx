import { FC, ReactNode } from "react";
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from "antd";

interface DrawerProps extends AntDrawerProps {
  children: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <AntDrawer {...props}>{children}</AntDrawer>;
};
