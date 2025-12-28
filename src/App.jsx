import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Experience from './pages/Experience';
import ExperienceDetails from './pages/ExperienceDetails';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Goodbye from './pages/Goodbye';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Dynamic 3D Background */}
      <ParticleBackground />
      
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/details" element={<ExperienceDetails />} />
            <Route path="/projects" element={<Projects />} />
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
