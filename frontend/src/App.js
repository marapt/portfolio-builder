import React, { useEffect } from 'react';
import ReactGA from "react-ga4"; 
import { Routes, Route, useLocation } from 'react-router-dom';
import { GovernanceProvider } from './GovernanceContext';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import ScrumBoardPage from './pages/ScrumBoardPage';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import Dashboard from './pages/Dashboard';
import GTMDashboard from './pages/GTMDashboard';
import VideoBubble from './components/VideoBubble';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Initialize GA4 (G-0BB4XSY59N)
ReactGA.initialize("G-0BB4XSY59N");
ReactGA.send("pageview");

function App() {
  return (
    <div className="App">
      <GovernanceProvider>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/scrum-board" element={<ScrumBoardPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gtm" element={<GTMDashboard />} />
        </Routes>
        <VideoBubble />
      </GovernanceProvider>
    </div>
  );
}

export default App;