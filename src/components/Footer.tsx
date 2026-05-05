import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/victor-mureti', name: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/muretimiriti', name: 'GitHub' },
    { icon: <FaEnvelope />, url: 'mailto:victormureti@gmail.com', name: 'Email' }
  ];

  const quickLinks = [
    { name: 'Hero', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Rotary', href: '#rotary' },
    { name: 'Skills', href: '#skills' },
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
              DevOps Engineer · Co-founder · District Rotaract Representative Elect D9216.
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
            <h4>Landing Pad</h4>
            <div className="contact-info">
              <p>victormureti@gmail.com</p>
              <p>Nairobi, Kenya</p>
              <p>Open to platform engineering and impact collaboration.</p>
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
              © {new Date().getFullYear()} Victor Mureti · Nairobi, Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
