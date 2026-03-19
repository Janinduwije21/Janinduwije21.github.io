import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="app">
        <AnimatePresence mode="wait">
          {loading && <SplashScreen />}
        </AnimatePresence>

        {!loading && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
              <Navigation />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </motion.div>
        )}
      </div>
  );
}

export default App;
