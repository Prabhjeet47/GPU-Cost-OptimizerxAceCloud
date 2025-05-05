import "./App.css";
import InputParameters from "./components/inputParameters";

function App() {
  return (
    <div className="App">
      <div className="text-center py-4 px-2 bg-white">
        <h1 className="fw-bold fs-2 fs-md-4 fs-lg-5 text-dark">
          GPU Cost Optimizer & Recommender
        </h1>
        <p className="text-secondary fs-8 fs-md-6 fs-lg-6">
          Find the most cost-effective GPU instances for your machine learning
          workloads
        </p>
      </div>
      <InputParameters />
    </div>
  );
}

export default App;
