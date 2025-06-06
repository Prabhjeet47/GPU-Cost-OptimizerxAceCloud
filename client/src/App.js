import React, {useState} from "react";
import axios from "axios";
import "./App.css";
import Left from "./components/left.jsx";
import Right from "./components/right.jsx";
import CustomHeader from "./components/head.jsx";

function App() {
  const [gpuData, setGpuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRecommendations = async (formData) => {
    try {
      setLoading(true);
      setErrorMsg("");
      const response = await axios.post(
        "https://gpu-cost-optimizerxacecloud.onrender.com/api/getRecommendations",
        formData,
        {
          headers: {
            Authorization: `Bearer authorizationkeytobesenttobackend0606`,
          },
        }
      );

      const authresponse = await axios.get(
        "https://gpu-cost-optimizerxacecloud.onrender.com/protected",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_KEY}`,
          },
        }
      );

      console.log(authresponse);

      const formattedData = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setGpuData(formattedData);
      setErrorMsg("");
    } catch (error) {
      console.error("API Error:", error);

      if (error.response?.status === 429) {
        setErrorMsg(
          "⚠️ Rate limit achieved. Please try again after 10 minutes."
        );
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }

      setGpuData([]);
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
          <Right gpuData={gpuData} loading={loading} errorMsg={errorMsg} />
        </div>
      </div>
    </div>
  );
}

export default App;
