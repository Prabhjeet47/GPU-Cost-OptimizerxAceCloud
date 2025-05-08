import "./App.css";
import Left from "./components/left.jsx";
import Right from "./components/right.jsx";
import CustomHeader from "./components/head.jsx";

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <div className="bottom-container">
        <div className="left-container">
          <Left />
        </div>
        <div className="right-container">
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
