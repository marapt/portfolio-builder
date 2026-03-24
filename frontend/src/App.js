import React from 'react';
import ReactGA from "react-ga4"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';

// Initialize GA4 (G-0BB4XSY59N)
ReactGA.initialize("G-0BB4XSY59N");
ReactGA.send("pageview");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;