import {Card, Row, Col, Spin, Empty, Tag, Button, Alert, Modal} from "antd";
import {useState} from "react";

const Right = ({gpuData, loading, errorMsg}) => {
  const [selectedGpu, setSelectedGpu] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showDetails = (gpu) => {
    setSelectedGpu(gpu);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedGpu(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🚀 Recommended GPU Instances</h2>
      {errorMsg && (
        <Card style={{marginBottom: 20, backgroundColor: "#fff1f0"}}>
          <Alert message="Error" description={errorMsg} type="error" showIcon />
        </Card>
      )}

      {loading ? (
        <div style={styles.centered}>
          <Spin size="large" tip="Fetching GPU magic..." />
        </div>
      ) : gpuData && gpuData.length > 0 ? (
        <Row gutter={[24, 24]}>
          {gpuData.map((gpu, index) => {
            const item = gpu.gpu[0];
            return (
              <Col key={index} xs={24} sm={24} md={24} lg={24}>
                <Card
                  hoverable
                  style={styles.card}
                  headStyle={styles.cardHeader}
                  title={
                    <span style={styles.cardTitle}>
                      {item.gpu_description || "GPU Name"}
                    </span>
                  }
                >
                  <p style={styles.text}>
                    <strong>🧠 vCPUs:</strong> {item.vcpus}
                  </p>
                  <p style={styles.text}>
                    <strong>💾 RAM:</strong> {item.ram} GB
                  </p>
                  <p style={styles.text}>
                    <strong>💰 Monthly Price:</strong>{" "}
                    <span style={{color: "#52c41a", fontWeight: 600}}>
                      ${item.price_per_month}
                    </span>
                  </p>
                  <p style={styles.text}>
                    <strong>🌍 Region:</strong> {item.region}
                  </p>
                  <p style={styles.text}>
                    <strong>🖥️ OS:</strong>{" "}
                    <Tag color="blue">{item.operating_system}</Tag>
                  </p>
                  <div style={{textAlign: "center", marginTop: 20}}>
                    <Button type="primary" onClick={() => showDetails(item)}>
                      View Details
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Empty description="No recommendations yet. Try submitting your workload!" />
      )}

      <Modal
        title={
          <span style={styles.modalTitle}>
            {selectedGpu?.gpu_description || "GPU Details"}
          </span>
        }
        open={modalVisible}
        onCancel={handleClose}
        footer={null}
        centered
        width={700}
        bodyStyle={styles.modalBody}
      >
        {selectedGpu && (
          <Row gutter={[24, 16]}>
            <Col xs={24} sm={12}>
              <p style={styles.modalText}>
                <strong>🌍 Country:</strong> {selectedGpu.country}
              </p>
              <p style={styles.modalText}>
                <strong>🧠 vCPUs:</strong> {selectedGpu.vcpus}
              </p>
              <p style={styles.modalText}>
                <strong>💾 RAM:</strong> {selectedGpu.ram} GB
              </p>
              <p style={styles.modalText}>
                <strong>💻 OS:</strong> {selectedGpu.operating_system}
              </p>
              <p style={styles.modalText}>
                <strong>📦 Resource Name:</strong> {selectedGpu.resource_name}
              </p>
              <p style={styles.modalText}>
                <strong>⚙️ Resource Class:</strong> {selectedGpu.resource_class}
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <p style={styles.modalText}>
                <strong>💰 Price (Hourly):</strong> ₹
                {selectedGpu.price_per_hour}
              </p>
              <p style={styles.modalText}>
                <strong>💸 Monthly:</strong> ₹{selectedGpu.price_per_month}
              </p>
              <p style={styles.modalText}>
                <strong>📅 Half-Year:</strong> ₹
                {selectedGpu.price_per_half_year}
              </p>
              <p style={styles.modalText}>
                <strong>📆 Yearly:</strong> ₹{selectedGpu.price_per_year}
              </p>
              <p style={styles.modalText}>
                <strong>⚡ Spot Price:</strong> ₹{selectedGpu.price_per_spot}
              </p>
              <p style={styles.modalText}>
                <strong>📍 Region:</strong> {selectedGpu.region}
              </p>
            </Col>
          </Row>
        )}
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#e1e0ee",
    minHeight: "100vh",
    borderRadius: "8px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
    color: "#3f3f3f",
  },
  card: {
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  cardHeader: {
    backgroundColor: "#fafafa",
    borderRadius: "15px 15px 0 0",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1890ff",
  },
  text: {
    fontSize: "15px",
    marginBottom: "10px",
  },
  centered: {
    textAlign: "center",
    marginTop: "100px",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3f3f3f",
  },
  modalBody: {
    padding: "25px",
    backgroundColor: "#fefefe",
  },
  modalText: {
    fontSize: "15px",
    marginBottom: "12px",
    color: "#333",
  },
};

export default Right;
