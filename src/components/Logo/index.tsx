import { FC } from "react";
import { Flex, Typography } from "antd";
import logo from "../../assets/icons/logo.svg";

interface LogoProps {
  isMobile?: boolean;
}

export const Logo: FC<LogoProps> = ({ isMobile }) => (
  <Flex justify="center" align="center">
    <img src={logo} className="App-logo" alt="logo" />
    {!isMobile && (
      <Typography.Text style={{ fontSize: "1.5rem", color: "#1677ff" }}>
        REACT
      </Typography.Text>
    )}
  </Flex>
);
