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
      // Make a POST request to your backend API here
      const response = await axios.post(
        "http://your-backend-url/api/recommendations",
        values
      );
      console.log(response.data);
      // Handle the response from the backend
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Handle errors here (e.g., show error message)
    }
  };

  console.log(country, region, os);

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
            <Select.Option value="India">India</Select.Option>
            <Select.Option value="USA">USA</Select.Option>
          </Select>
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
            <Select.Option value="Noida">Noida</Select.Option>
            <Select.Option value="Delhi">Delhi</Select.Option>
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
          label="Monthly Budget ($)"
          name="budget"
          rules={[
            {required: true, message: "Please input your monthly budget!"},
          ]}
        >
          <Slider min={100} max={5000} defaultValue={1100} />
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
            <Select.Option value="Windows">Windows</Select.Option>
            <Select.Option value="Linux">Linux</Select.Option>
          </Select>
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
    boxShadow: "2px 3px 2px rgba(0, 0, 0, 0.5)",

    backgroundColor: "#e0e0e0",
  },
  button: {
    width: "100%",
  },
};

// Export the component
export default Left;
