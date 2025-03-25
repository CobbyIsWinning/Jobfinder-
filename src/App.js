import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;
