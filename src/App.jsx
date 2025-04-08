import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./componet/Blue";
import Red from "./componet/Red";
import Home from "./componet/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
        <Link className="nav-link" to="/blue">Blue</Link>
        <Link className="nav-link" to="/red">Red</Link>
        <Link className="nav-link" to="/home">Home</Link>
        </div>
        <div id="main-section">
        <Routes>
            <Route path="/blue" element={<Blue />}/>
            <Route path="/red" element={<Red />}/>
            <Route path="/home" element={<Home />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
