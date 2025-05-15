// Header.jsx
import React from "react";
import {Layout} from "antd";
import "./head.css"; // Create a CSS file for styles

const {Header} = Layout;

const CustomHeader = () => {
  return (
    <Header className="header">
      <div className="logo">GPU Cost Optimizer</div>
    </Header>
  );
};

export default CustomHeader;
