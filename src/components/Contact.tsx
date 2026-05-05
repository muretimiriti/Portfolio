import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
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

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'victormureti@gmail.com',
      link: 'mailto:victormureti@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      value: 'linkedin.com/in/victor-mureti',
      link: 'https://linkedin.com/in/victor-mureti'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      value: 'github.com/muretimiriti',
      link: 'https://github.com/muretimiriti'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: ''
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Let's build something.</motion.h2>
          <motion.p variants={itemVariants}>
            Whether it's a DevOps architecture conversation, a Rotary collaboration, or a startup you're building in East Africa - I'm open to the right conversations.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-card"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((item) => (
            <motion.div key={item.value} className="contact-row" variants={itemVariants}>
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.title ?? item.name}</span>
              {item.link ? (
                <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </motion.div>
          ))}
          <p className="availability">Available for Senior DevOps / Platform Engineering roles · Technical leadership · Rotary & impact collaboration.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
