import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'branding', label: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Tea Smart UI',
      description: 'A comprehensive UI/UX design project showcasing intuitive user flows and modern design principles.',
      category: 'ui-ux',
      tags: ['UI Design', 'User Research', 'Prototyping'],
      link: 'https://github.com/Janinduwije21/tea_smart'
    },
    {
      id: 2,
      title: 'Green Future',
      description: 'A responsive web application built with modern frameworks, focused on environmental awareness.',
      category: 'web-dev',
      tags: ['React', 'Responsive', 'Animation'],
      link: 'https://github.com/Janinduwije21/Green-Future'
    },
    {
      id: 3,
      title: 'NextOra',
      description: 'A comprehensive university student portal developed as a Level 5 (2nd Year) SDGP group project, designed to unify campus life through intelligent digital solutions.',
      category: 'web-dev',
      tags: ['University Portal', 'Digital Solutions', 'Intranet'],
      link: 'https://github.com/nextora-dev',
      website: 'https://www.nextora.lk'
    },
    {
      id: 4,
      title: 'E-Commerce Redesign',
      description: 'A complete brand identity and UI redesign for an online marketplace platform.',
      category: 'ui-ux',
      tags: ['UI/UX', 'Branding', 'E-Commerce']
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      category: 'web-dev',
      tags: ['React', 'Framer Motion', 'CSS'],
      link: 'https://github.com/Janinduwije21/Janinduwije21.github.io'
    },
    {
      id: 6,
      title: 'Corporate Branding',
      description: 'Professional branding package for a financial services company.',
      category: 'branding',
      tags: ['Corporate', 'Logo', 'Print Design']
      
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          my projects<span className="dot">.</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A showcase of my recent work and creative projects.
        </motion.p>

        <motion.div 
          className="filter-menu"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -10 }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project →
                    </a>
                  ) : (
                    <button className="project-link">
                      View Project →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
