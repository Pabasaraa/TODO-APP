import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
