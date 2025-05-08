import React, {useState} from "react";
import {Card, Col, Row, Spin, Typography} from "antd";

const {Title, Paragraph} = Typography;

const Right = () => {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  // Simulate fetching recommendations
  React.useEffect(() => {
    setTimeout(() => {
      // Simulating no recommendations found
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "2px 3px 2px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Title level={3}>GPU Recommendations</Title>
      {loading ? (
        <Spin size="large" />
      ) : recommendations.length === 0 ? (
        <Card style={{textAlign: "center"}}>
          <Title level={4}>No recommendations yet</Title>
          <Paragraph>
            Fill out the form to get personalized GPU recommendations
          </Paragraph>
        </Card>
      ) : (
        <Row gutter={[16, 16]}>
          {recommendations.map((gpu) => (
            <Col span={8} key={gpu.id}>
              <Card title={gpu.name} bordered={false}>
                <p>Price: ${gpu.price}</p>
                <p>Memory: {gpu.memory} GB</p>
                <p>vCPUs: {gpu.vCPUs}</p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Right;
