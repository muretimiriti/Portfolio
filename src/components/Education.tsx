import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const education = [
    {
      title: 'Bachelor of Science in Computer Technology',
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
      location: 'Nairobi, Kenya',
      period: '2019 - 2023',
      type: 'Degree',
      description: 'Comprehensive study of computer technology fundamentals, software development, database management, and system administration.',
      highlights: [
        'Graduated with Second Class Honors (Upper Division)',
        'Specialized in Software Engineering and Database Systems',
        'Completed final year project on Edge Computing for traffic management',
        
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS for DevOps',
      institution: 'Amazon Web Services',
      period: 'In Progress - 80% Complete',
      type: 'Certification',
      description: 'Comprehensive AWS DevOps certification covering cloud infrastructure, CI/CD pipelines, and automation.',
      status: 'In Progress'
    },
    {
      title: 'Introduction to Machine Learning',
      institution: 'Kaggle',
      period: 'Completed',
      type: 'Course',
      description: 'Fundamental concepts of machine learning, data preprocessing, and model evaluation techniques.',
      status: 'Completed'
    },
    {
      title: 'Intermediate Machine Learning',
      institution: 'Kaggle',
      period: 'Completed',
      type: 'Course',
      description: 'Advanced machine learning techniques including feature engineering, model validation, and ensemble methods.',
      status: 'Completed'
    },
    {
      title: 'Introduction to Deep Learning',
      institution: 'Kaggle',
      period: 'Completed',
      type: 'Course',
      description: 'Deep learning fundamentals covering neural networks, backpropagation, and optimization algorithms.',
      status: 'Completed'
    },
    {
      title: 'Introduction to Neural Networks',
      institution: 'Kaggle',
      period: 'Completed',
      type: 'Course',
      description: 'Comprehensive neural network concepts including architecture design, activation functions, and training processes.',
      status: 'Completed'
    },
    {
      title: 'Ruby on Rails & Python Bootcamp',
      institution: 'Dive Into Code',
      period: 'In Progress - 30% Complete',
      type: 'Bootcamp',
      description: 'Intensive bootcamp covering Ruby on Rails web development and Python programming fundamentals.',
      status: 'In Progress'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Education & Certifications</motion.h2>
          <motion.p variants={itemVariants}>
            My academic background and professional certifications
          </motion.p>
        </motion.div>

        <div className="education-content">
          <motion.div
            className="education-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Education</h3>
            {education.map((edu) => (
              <motion.div
                key={edu.title}
                className="education-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                
                <div className="education-details">
                  <div className="education-header">
                    <h4>{edu.title}</h4>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">
                        <FaCalendarAlt />
                        {edu.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt />
                        {edu.location}
                      </span>
                      <span className="type">{edu.type}</span>
                    </div>
                  </div>
                  
                  <p>{edu.description}</p>
                  
                  <div className="education-highlights">
                    <h5>Key Highlights:</h5>
                    <ul>
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="certifications-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Certifications & Learning Progress</h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="certification-icon">
                    <FaCertificate />
                  </div>
                  
                  <div className="certification-content">
                    <h4>{cert.title}</h4>
                    <p className="institution">{cert.institution}</p>
                    <p className="period">{cert.period}</p>
                    <p className="description">{cert.description}</p>
                    <div className={`certification-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                      {cert.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
