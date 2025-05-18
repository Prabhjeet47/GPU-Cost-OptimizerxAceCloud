import React, {useState} from "react";
import axios from "axios"; // Import Axios
import {Form, Button, Slider, Select} from "antd";
import "../../node_modules/antd/dist/reset.css";

const Left = () => {
  const [form] = Form.useForm();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [os, setOs] = useState("");

  const onFinish = async (values) => {
    console.log("Form values: ", values);
    try {
      const response = await axios.post(
        "http://localhost:8001/api/getRecommendations",
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  // console.log(country, region, os);

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
          <Slider min={1} max={16} defaultValue={4} />
        </Form.Item>

        <Form.Item
          label="RAM (GB)"
          name="ram"
          rules={[{required: true, message: "Please input RAM size!"}]}
        >
          <Slider min={4} max={64} defaultValue={8} />
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
            <Select.Option value="noida">Noida</Select.Option>
            <Select.Option value="delhi">Delhi</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Monthly Budget ($)"
          name="budget"
          rules={[
            {required: true, message: "Please input your monthly budget!"},
          ]}
        >
          <Slider min={100} max={5000} defaultValue={1100} />
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
