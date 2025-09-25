import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaNodeJs, FaReact, FaDocker, FaAws, FaGitAlt, FaLinux,
  FaDatabase, FaServer, FaCode, FaTools, FaCloud
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';

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
      title: 'Web Development',
      icon: <FaCode />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'React', icon: <FaReact />, level: 80 },
        { name: 'REST APIs', icon: <FaServer />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'SQL', icon: <FaDatabase />, level: 75 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <FaCloud />,
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'GitHub Actions', icon: <FaGitAlt />, level: 80 },
        { name: 'AWS EC2', icon: <FaAws />, level: 75 },
        { name: 'AWS IAM', icon: <FaAws />, level: 70 },
        { name: 'AWS S3', icon: <FaAws />, level: 75 },
        { name: 'Heroku', icon: <FaCloud />, level: 80 }
      ]
    },
    {
      title: 'System Support & ITIL',
      icon: <FaServer />,
      skills: [
        { name: 'Application Support', icon: <FaTools />, level: 90 },
        { name: 'Root Cause Analysis', icon: <FaTools />, level: 85 },
        { name: 'UAT Coordination', icon: <FaTools />, level: 80 },
        { name: 'Backup Validation', icon: <FaTools />, level: 85 },
        { name: 'Vulnerability Assessment', icon: <FaTools />, level: 75 },
        { name: 'ITIL Practices', icon: <FaTools />, level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'Bash Scripting', icon: <FaLinux />, level: 80 },
        { name: 'Postman', icon: <SiPostman />, level: 85 },
        { name: 'VS Code', icon: <FaCode />, level: 90 },
        { name: 'Linux/Ubuntu', icon: <FaLinux />, level: 85 },
        { name: 'Windows Server', icon: <FaServer />, level: 75 }
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
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          <motion.p variants={itemVariants}>
            A comprehensive overview of my technical skills and professional competencies
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
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
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
