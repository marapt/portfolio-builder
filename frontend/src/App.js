import React from 'react';
import ReactGA from "react-ga4"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import ScrumBoardPage from './pages/ScrumBoardPage';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';

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
          <Route path="/scrum-board" element={<ScrumBoardPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;