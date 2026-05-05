import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCodeBranch, FaUsers } from 'react-icons/fa';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: 'Infrastructure & DevOps',
      icon: <FaCloud />,
      skills: [
        'CI/CD Pipelines (Tekton, GitHub Actions)',
        'Kubernetes - container orchestration',
        'Docker - containerisation',
        'Terraform - infrastructure as code',
        'Ansible - configuration management',
        'DevSecOps - security-integrated pipelines',
        'GitOps - declarative infrastructure',
        'Cloud: AWS, GCP',
        'Observability & monitoring'
      ]
    },
    {
      title: 'Development & Systems',
      icon: <FaCodeBranch />,
      skills: [
        'Next.js / React - primary web stack',
        'Node.js - backend services',
        'TypeScript',
        'PostgreSQL / MongoDB',
        'REST APIs & integrations',
        'Fabric.js - canvas customisation',
        'Zustand - state management',
        'Pesapal - payments (East Africa)',
        'WhatsApp Business API'
      ]
    },
    {
      title: 'Leadership & Operations',
      icon: <FaUsers />,
      skills: [
        'Technical architecture & roadmap',
        'Engineering team hiring & lead',
        'Cross-functional team coordination',
        'Governance & stakeholder reporting',
        'Community & civic leadership',
        'Event design & delivery'
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Skills & Stack</motion.h2>
          <motion.p variants={itemVariants}>
            Curated to signal infrastructure-first engineering, systems delivery, and leadership execution.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certification-note"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Certification</h3>
          <p>
            Cisco Networking Academy: Cybersecurity and Cyber Operations - covering network security fundamentals, threat detection frameworks, and cyber operations directly relevant to DevSecOps practice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
