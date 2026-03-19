import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = {
    languages: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 }
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 88 },
      { name: 'Figma', level: 98 },
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            my skills<span className="dot">.</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Here's an overview of my technical skills and proficiency levels.
          </motion.p>

          <div className="skills-grid">
            <motion.div className="skills-category" variants={itemVariants}>
              <h3 className="category-title">Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="skills-category" variants={itemVariants}>
              <h3 className="category-title">Tools & Frameworks</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
