// Header.jsx
import React from "react";
import {Layout, Menu} from "antd";
import {HomeOutlined, InfoCircleOutlined} from "@ant-design/icons";
import "./head.css"; // Create a CSS file for styles

const {Header} = Layout;

const CustomHeader = () => {
  return (
    <Header className="header">
      <div className="logo">GPU Cost Optimizer</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default CustomHeader;
