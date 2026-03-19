import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-decoration"></div>
      
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          about me<span className="dot">.</span>
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Get to know my background, principles, and experience.
        </motion.p>

        <div className="about-grid">
          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-icon">💻</div>
            <h3>My Approach</h3>
            <p>
              As a UI/UX designer and front-end developer, I focus on creating visually 
              appealing and user-centered digital experiences. I combine a deep understanding 
              of user behavior with clean, responsive code to build interfaces that are both 
              intuitive and engaging.
            </p>
            <p>
              My goal is to deliver seamless interactions that enhance usability and 
              accessibility across all devices. I continuously explore new design trends 
              and front-end technologies to refine my skills and produce high-quality, 
              scalable solutions.
            </p>
          </motion.div>

          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <ul className="education-list">
              <li>
                <strong>School:</strong> St. Aloysius' College, Galle
                <span className="year">2012 – 2023</span>
              </li>
              <li>
                <strong>Foundation:</strong> Foundation in Software Engineering
                <br />Informatics Institute of Technology (IIT Campus)
                <span className="year">Sep 2023 – Sep 2024</span>
              </li>
              <li>
                <strong>BEng (Hons):</strong> BEng (Hons) Software Engineering
                <br />University of Westminster
                <span className="year">Jan 2025 – Sep 2028</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/Janinduwije21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={32} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/janindu-wijesooriya-bb459a1b0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={32} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
