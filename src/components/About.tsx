import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaGlobeAfrica, FaRocket } from 'react-icons/fa';

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

  const pillars = [
    {
      title: 'Infrastructure & DevOps',
      description: 'CI/CD, Kubernetes, Terraform, DevSecOps, banking-grade systems.',
      icon: <FaServer />
    },
    {
      title: 'Community & Leadership',
      description: 'Rotary DRR D9216, 2,000+ members, East Africa, social impact.',
      icon: <FaGlobeAfrica />
    },
    {
      title: 'Founder & Builder',
      description: 'Perception Pro, Art of Kwizzez, Kora - shipping from idea to production.',
      icon: <FaRocket />
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
          <motion.h2 variants={itemVariants}>About</motion.h2>
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
              <h3>I build infrastructure that doesn't fail and communities that don't either.</h3>
              <p>
                By day I'm a DevOps and Infrastructure Engineer at Diamond Trust Bank - designing CI/CD pipelines, Kubernetes-managed deployments, and cloud systems that keep critical banking services running reliably. My stack: Docker, Tekton, Terraform, Ansible, AWS/GCP, with a strong focus on DevSecOps and GitOps principles.
              </p>
              <p>
                Beyond the terminal, I'm the District Rotaract Representative Elect for Rotary District 9216 - a governance role overseeing 2,000+ young leaders across Ethiopia, Mt Kenya, the Coast, Thika, and Nairobi. I recently shipped the district-wide management and reporting system that replaced manual processes for the entire council. Because if you're going to lead people, you should also make their tools better.
              </p>
              <p>
                I've co-founded two ventures: Perception Pro, where I serve as Tech Lead; and Art of Kwizzez, a game platform where I lead technology and team building. I also lead Kora, a factory production management system currently in active development.
              </p>
              <p>Nairobi, Kenya. Building things that scale.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-values"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>Three Pillars</motion.h3>
            <div className="values-grid">
              {pillars.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="pillar-icon">{value.icon}</div>
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
