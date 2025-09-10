// src/App.js
import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* Fallback: avoid white screen for unknown hash paths like `#/projects` or `#projects` */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
