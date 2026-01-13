import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Goodbye from './pages/Goodbye';
import MindDumpDetails from './pages/MindDumpDetails';
import TimeBoxDetails from './pages/TimeBoxDetails';
import PulseFundDetails from './pages/PulseFundDetails';
import Resume from './pages/Resume';

function App() {
  const location = useLocation();
  const isMindDumpPage = location.pathname === '/projects/minddump';
  const isTimeBoxPage = location.pathname === '/projects/timebox';
  const isPulseFundPage = location.pathname === '/projects/pulsefund';
  const isResumePage = location.pathname === '/resume';
  const isDetailsPage = isMindDumpPage || isTimeBoxPage || isPulseFundPage || isResumePage;

  return (
    <div className={`app-container ${isDetailsPage ? 'project-details-page' : ''}`}>
      {/* Dynamic 3D Background - Hidden on project details */}
      {!isDetailsPage && <ParticleBackground />}
      
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/minddump" element={<MindDumpDetails />} />
            <Route path="/projects/timebox" element={<TimeBoxDetails />} />
            <Route path="/projects/pulsefund" element={<PulseFundDetails />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/goodbye" element={<Goodbye />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
