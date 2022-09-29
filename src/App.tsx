import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import { Landing, CreateEvent } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="create" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
