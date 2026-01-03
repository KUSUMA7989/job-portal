import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobApplicationForm from "./components/JobApplicationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
