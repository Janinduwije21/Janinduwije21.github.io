import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrollY = window.scrollY;
        const moveUp = Math.min(scrollY / 2, 400);
        circleRef.current.style.transform = `translateX(-50%) translateY(${moveUp - 400}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>I'm <span className="highlight">Janindu.</span></h3>
          </motion.div>

          <motion.div 
            className="hero-title-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="main-title">FULLSTACK</h1>
            <h2 className="subtitle">DEVELOPER</h2>
          </motion.div>
        </div>

        <motion.div 
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.div 
            className="animated-circle"
            ref={circleRef}
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="character-wrapper">
            <motion.div 
              className="character-image"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <img
                src="/images/profile.png"
                alt="Janindu Wijesooriya"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h3 className="info-label">I'am</h3>
            <h4 className="info-name">JANINDU<br/>WIJESOORIYA</h4>
            <p className="info-description">
              I'm a UI/UX enthusiast and front-end developer based in Sri Lanka, 
              passionate about crafting intuitive, user-centered web experiences. 
              This website is my creative workspace—where thoughtful design meets clean, 
              functional code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
