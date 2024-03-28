import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DatasetDetails from "./components/DatasetDetails";
function App() {
  return (
    <div className="mainContainer">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dataset/:parameter" element={<DatasetDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
