import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
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

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/victor-mureti-b07512215/', name: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/muretimiriti', name: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://twitter.com/victor_mureti', name: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:muretivictor@gmail.com', name: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Victor Mureti</h3>
            <p>
              Full-Stack Developer & DevOps Engineer passionate about building 
              reliable systems and empowering solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 muretivictor@gmail.com</p>
              <p>📱 +254 708 287 141</p>
              <p>📍 Nairobi, Kenya</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              © {new Date().getFullYear()} Victor Mureti. 
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
