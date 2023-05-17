import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
