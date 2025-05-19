import React, {useState} from "react";
import axios from "axios";
import "./App.css";
import Left from "./components/left.jsx";
import Right from "./components/right.jsx";
import CustomHeader from "./components/head.jsx";

function App() {
  const [gpuData, setGpuData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRecommendations = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "gpu-cost-optimizerxacecloud-production.up.railway.app/api/getRecommendations",
        formData
      );
      const formattedData = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setGpuData(formattedData);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <CustomHeader />
      <div className="bottom-container">
        <div className="left-container">
          <Left onSubmit={handleRecommendations} />
        </div>
        <div className="right-container">
          <Right gpuData={gpuData} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
