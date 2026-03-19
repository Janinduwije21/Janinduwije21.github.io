import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experienceSections = [
    {
      sectionId: 1,
      sectionTitle: 'NextOra',
        sectionType: 'SDGP group project to unify campus life through intelligent digital solutions.',

        experiences: [
        {
          id: 1,
            title: 'Co-Founder',
            duration: 'Sep 2025 - Present',
            months: '7 mos',
            mode: 'Hybrid',
            description: 'Co-founding NextOra as a Level 5 SDGP group project to unify campus life through intelligent digital solutions.',
            tags: ['SDGP', 'Leadership', 'Innovation']

        },
        {
          id: 2,
            title: 'Frontend Developer',
            duration: 'Sep 2025 - Present',
            months: '7 mos',
            mode: 'Hybrid',
            description: 'Developing and maintaining the frontend of NextOra, a comprehensive university student portal.',
            tags: ['Next.js','AWS', 'Frontend', 'Web Development']

        }
      ]
    },
    {
      sectionId: 2,
      sectionTitle: 'IEEE Computer Society Student Branch Chapter of IIT',
      sectionType: 'Exactive Committee Member',
      experiences: [
        {
          id: 3,
            title: 'Public Visibility Lead (26/27)',
            duration: 'Mar 2026 - Present',
            description: 'Leading public visibility initiatives and strategic communications for IEEE Computer Society Student Branch Chapter of IIT.',
            tags: ['Leadership', 'Strategy', 'Communications']

        },
        {
          id: 4,
            title: 'Public Visibility Coordinator - IndustPro 5.0',
            duration: 'Feb 2026 - Present',
            months: '2 mos',
            type: 'Seasonal',
            description: 'Managing public visibility and marketing efforts for IndustPro 5.0, coordinating promotional activities and engagement strategies.',
            tags: ['Marketing', 'Public Relations', 'Coordination']

        },
        {
          id: 5,
          title: 'Public Visibility Coordinator - CYBERQUEST',
          duration: 'Dec 2025 - Feb 2026',
          months: '3 mos',
          type: 'Seasonal',
          description: 'Coordinated public visibility and promotion strategies for CYBERQUEST cybersecurity event.',
          tags: ['Cybersecurity', 'Event Management', 'Marketing']
        },
        {
          id: 6,
          title: 'Designer - Coderally 6.0 ',
          duration: 'Jun 2025 - Sep 2025',
          months: '4 mos',
          description: 'Designed high-impact digital media content and countdown posters for Coderally 6.0, a flagship coding competition. Boosted visibility and registration through deadline-driven marketing.',
          tags: ['Design', 'Marketing', 'Graphic Design']
        }
      ]
    },
    {
      sectionId: 3,
      sectionTitle: 'IEEE Volunteering Experience',
      sectionType: 'Volunteer · Various Organizations',
      experiences: [
        {
          id: 7,
          title: 'Technical Team Volunteer',
          company: 'IEEE Robotics and Automation Society of IIT',
          duration: 'Oct 2025 - Dec 2025',
          months: '3 mos',
          description: 'Contributed to VERTEX\'25, supporting technical activities, hands-on challenges, and ensuring smooth operation of technical sessions. Enhanced technical knowledge, teamwork, and problem-solving skills.',
          tags: ['Robotics', 'Volunteering', 'Technical Support']
        },
        {
          id: 8,
          title: 'Volunteer Designer',
          company: 'IEEE WIE Affinity Group of IIT',
          duration: 'Sep 2025 - Oct 2025',
          months: '2 mos',
          description: 'Designed engaging visuals for the AdaptIQ Program, combining creativity with purpose to support an initiative that empowers and inspires.',
          tags: ['Design', 'Creativity', 'Volunteering']
        },
        {
          id: 9,
          title: 'Design Team Volunteer',
          company: 'IEEE Student Branch of Informatics Institute of Technology',
          duration: 'Aug 2025 - Oct 2025',
          months: '3 mos',
          description: 'Designed creative materials for HackSphere 25 and IEEEXtreme 19.0, creating visuals that captured the enthusiasm and competitive spirit of participants.',
          tags: ['Design', 'Graphic Design', 'Events']
        }
      ]
    },
    {
      sectionId: 4,
      sectionTitle: 'St. Aloysius\' College Galle, Photography Association',
      location: 'Galle, Southern Province, Sri Lanka',
      experiences: [
        {
          id: 10,
          title: 'Vice President',
          duration: 'Jan 2023 - Dec 2023',
          months: '1 yr',
          description: 'Led photography association initiatives and activities as Vice President.',
          tags: ['Leadership', 'Photography', 'Student Organization']
        },
        {
          id: 11,
          title: 'Secretary',
          duration: 'Jan 2022 - Dec 2022',
          months: '1 yr',
          description: 'Managed communications and documentation for the Photography Association.',
          tags: ['Administration', 'Photography', 'Organization']
        },
        {
          id: 12,
          title: 'Treasurer',
          duration: 'Jan 2021 - Dec 2021',
          months: '1 yr',
          description: 'Managed financial matters and budgeting for the Photography Association.',
          tags: ['Finance', 'Photography', 'Management']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          my experience<span className="dot">.</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional journey and career highlights.
        </motion.p>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {experienceSections.map((section) => (
              <motion.div
                key={section.sectionId}
                className={`experience-section-card ${expandedId === section.sectionId ? 'expanded' : ''}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                layout
              >
                <div
                  className="section-header-main"
                  onClick={() => setExpandedId(expandedId === section.sectionId ? null : section.sectionId)}
                >
                  <div className="section-info">
                    <h3 className="section-company">{section.sectionTitle}</h3>
                    <p className="section-meta">{section.sectionType}</p>
                  </div>
                  <div className="section-location">
                    {section.location}
                  </div>
                  <div className="expand-indicator">
                    <span className={`icon ${expandedId === section.sectionId ? 'open' : ''}`}>▼</span>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === section.sectionId && (
                    <motion.div
                      className="section-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="experiences-list">
                        {section.experiences.map((exp, index) => (
                          <div key={exp.id} className="experience-item">
                            <div className="experience-item-header">
                              <div className="item-title-section">
                                <h4 className="item-title">{exp.title}</h4>
                                {exp.company && <p className="item-company">{exp.company}</p>}
                              </div>
                              <div className="item-meta-info">
                                <div className="item-duration">
                                  {exp.type && <span className="type-badge">{exp.type}</span>}
                                  <span className="duration-text">{exp.duration}</span>
                                  <span className="duration-short">{exp.months}</span>
                                </div>
                                <div className="item-mode">{exp.mode}</div>
                              </div>
                            </div>
                            <p className="item-description">{exp.description}</p>
                            <div className="item-tags">
                              {exp.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag">{tag}</span>
                              ))}
                            </div>
                            {index < section.experiences.length - 1 && <div className="divider" />}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

