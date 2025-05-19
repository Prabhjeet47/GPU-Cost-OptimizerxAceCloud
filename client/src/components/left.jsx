import React, {useState} from "react";
import axios from "axios"; // Import Axios
import {Form, Button, Slider, Select} from "antd";
import "../../node_modules/antd/dist/reset.css";

const Left = (props) => {
  const [form] = Form.useForm();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [os, setOs] = useState("");

  const onFinish = async (values) => {
    if (typeof props.onSubmit === "function") {
      props.onSubmit(values); // Send data to App.js
    }
  };

  return (
    <div style={styles.container}>
      <h2>Workload Parameters</h2>
      <p>
        Provide details about your GPU workload to get tailored recommendations
      </p>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Country"
          name="country"
          rules={[{required: true, message: "Please select your country!"}]}
        >
          <Select
            placeholder="Select your country"
            onChange={(value) => setCountry(value)}
          >
            <Select.Option value="india">India</Select.Option>
            <Select.Option value="usa">USA</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Operating System"
          name="os"
          rules={[
            {required: true, message: "Please select your operating system!"},
          ]}
        >
          <Select
            placeholder="Select your operating system"
            onChange={(value) => setOs(value)}
          >
            <Select.Option value="windows">Windows</Select.Option>
            <Select.Option value="linux">Linux</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="vCPUs"
          name="vcpus"
          rules={[{required: true, message: "Please input number of vCPUs!"}]}
        >
          <Slider min={1} max={208} defaultValue={64} />
        </Form.Item>

        <Form.Item
          label="RAM (GB)"
          name="ram"
          rules={[{required: true, message: "Please input RAM size!"}]}
        >
          <Slider min={1} max={2000} defaultValue={64} />
        </Form.Item>

        <Form.Item
          label="Region"
          name="region"
          rules={[{required: true, message: "Please select your region!"}]}
        >
          <Select
            placeholder="Select your region"
            onChange={(value) => setRegion(value)}
          >
            <Select.Option value="mumbai">Mumbai</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Monthly Budget ($)"
          name="budget"
          rules={[
            {required: true, message: "Please input your monthly budget!"},
          ]}
        >
          <Slider min={100} max={1700000} defaultValue={10000} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.button}>
            Get Recommendations
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",

    backgroundColor: "#e0e0ee",
  },
  button: {
    width: "100%",
  },
};

// Export the component
export default Left;
