import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin } from 'react-icons/fa';
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

  const stats = [
    '2,000+ Rotaractors governed across 5 East African regions',
    '2 tech ventures co-founded (Perception Pro + Art of Kwizzez)',
    '11 production systems and applications delivered'
  ];

  return (
    <section id="hero" className="hero">
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
              Victor Mureti
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              variants={itemVariants}
            >
              DevOps Engineer · Co-founder · District Rotaract Representative Elect, D9216
            </motion.p>

            <motion.h2 className="hero-tagline" variants={itemVariants}>
              Engineering reliable systems.<br />
              Building resilient communities.
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              I build infrastructure that doesn't fail and communities that don't either. Based in Nairobi, Kenya - shipping CI/CD pipelines by day and governing 2,000+ Rotaractors by calling.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work
              </motion.a>

              <motion.a
                href="/Victor-Mureti-CV.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload />
                Download CV
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/victor-mureti"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                Let's connect
              </motion.a>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              {stats.map((stat) => (
                <div key={stat} className="stat-chip">{stat}</div>
              ))}
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
                alt="Victor Mureti"
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
