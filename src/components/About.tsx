import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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

  const values = [
    {
      title: 'Integrity',
      description: 'Committed to ethical practices and transparent communication in all professional endeavors.'
    },
    {
      title: 'Dynamism',
      description: 'Adaptable and innovative, always seeking new challenges and growth opportunities.'
    },
    {
      title: 'Performance',
      description: 'Focused on delivering high-quality solutions that exceed expectations and drive results.'
    },
    {
      title: 'Cooperation',
      description: 'Believing in the power of teamwork and collaborative problem-solving for optimal outcomes.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-bio" variants={itemVariants}>
              <h3>My Journey in Technology</h3>
              <p>
                With a strong foundation in Information Technology and hands-on experience 
                in both development and operations, I bring a unique perspective to solving 
                complex technical challenges. My journey spans from application support 
                to DevOps engineering, giving me a comprehensive understanding of the 
                entire software development lifecycle.
              </p>
              <p>
                I'm passionate about creating robust, scalable solutions that not only 
                meet current requirements but also adapt to future needs. My experience 
                in system support has taught me the importance of reliability and 
                performance, while my DevOps background has instilled a culture of 
                continuous improvement and automation.
              </p>
            </motion.div>

            <motion.div className="about-goals" variants={itemVariants}>
              <h3>Career Goals</h3>
              <p>
                I'm focused on advancing my expertise in cloud-native technologies and 
                microservices architecture. My goal is to become a technical leader who 
                can bridge the gap between development and operations, driving innovation 
                while maintaining system stability and security.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-values"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>Core Values</motion.h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
