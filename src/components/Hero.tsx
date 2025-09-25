import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import headshot from '../assets/headshot.jpeg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span className="highlight">Victor Mureti</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              variants={itemVariants}
            >
              Building reliable systems, empowering solutions
            </motion.p>
            
            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              Full-Stack Developer & DevOps Engineer specializing in web development, 
              system support, and cloud infrastructure. Passionate about creating 
              efficient solutions that drive business success.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Contact Me
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-social"
              variants={itemVariants}
            >
              <a href="https://www.linkedin.com/in/victor-mureti-b07512215/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/muretimiriti" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/victor_mureti" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="headshot-container">
              <img 
                src={headshot} 
                alt="Victor Mureti - Full-Stack Developer & DevOps Engineer"
                className="headshot-image"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
