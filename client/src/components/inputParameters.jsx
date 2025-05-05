import React, {useState} from "react";
import "./inputParameters.css"; // Import the CSS defined below

const InputParameters = () => {
  const [vcpus, setVcpus] = useState(4);
  const [ram, setRam] = useState(8);
  const [budget, setBudget] = useState(1100);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({vcpus, ram, budget});
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="card shadow-sm mx-auto p-3" style={{maxWidth: "500px"}}>
          <h5 className="fw-bold">Workload Parameters</h5>
          <p className="text-muted small">
            Provide details about your GPU workload to get tailored
            recommendations
          </p>

          {/* Country */}
          <div className="mb-3">
            <label className="form-label">Country</label>
            <select className="form-select">
              <option>India</option>
              <option>USA</option>
              <option>Germany</option>
            </select>
          </div>

          {/* Region */}
          <div className="mb-3">
            <label className="form-label">Region</label>
            <select className="form-select">
              <option>Noida</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* vCPUs */}
          <div className="mb-3">
            <label className="form-label">vCPUs</label>
            <input
              type="range"
              min="1"
              max="32"
              value={vcpus}
              onChange={(e) => setVcpus(e.target.value)}
              className="custom-slider"
            />
            <div className="text-end">{vcpus}</div>
          </div>

          {/* RAM */}
          <div className="mb-3">
            <label className="form-label">RAM (GB)</label>
            <input
              type="range"
              min="2"
              max="128"
              value={ram}
              onChange={(e) => setRam(e.target.value)}
              className="form-range custom-slider"
            />
            <div className="text-end">{ram} GB</div>
          </div>

          {/* Budget */}
          <div className="mb-3">
            <label className="form-label">Monthly Budget ($)</label>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="form-range custom-slider"
            />
            <div className="text-end">${budget}</div>
          </div>

          {/* OS */}
          <div className="mb-3">
            <label className="form-label">Operating System</label>
            <select className="form-select">
              <option>Windows</option>
              <option>Linux</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="spotPrice"
            />
            <label className="form-check-label" htmlFor="spotPrice">
              Price Per Spot
            </label>
          </div>

          {/* Button */}
          <button className="btn btn-dark w-100" type="submit">
            Get Recommendations
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputParameters;
