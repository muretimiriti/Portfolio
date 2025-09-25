import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const experiences = [
    {
      title: 'Application Support Specialist',
      company: 'Tech Solutions Ltd',
      location: 'Nairobi, Kenya',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Providing comprehensive application support and maintenance for enterprise systems.',
      responsibilities: [
        'Managed application support tickets and resolved technical issues',
        'Conducted root cause analysis for system failures and performance issues',
        'Coordinated User Acceptance Testing (UAT) for new feature releases',
        'Implemented backup validation procedures and disaster recovery protocols',
        'Performed vulnerability assessments and security audits',
        'Collaborated with development teams to improve system reliability'
      ],
      achievements: [
        'Reduced system downtime by 40% through proactive monitoring',
        'Improved customer satisfaction scores by 25%',
        'Successfully managed 200+ support tickets monthly'
      ]
    },
    {
      title: 'DevOps Trainee',
      company: 'Cloud Innovations Inc',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Internship',
      description: 'Gained hands-on experience in DevOps practices and cloud infrastructure management.',
      responsibilities: [
        'Assisted in CI/CD pipeline setup and maintenance',
        'Learned containerization with Docker and orchestration',
        'Participated in cloud infrastructure provisioning on AWS',
        'Contributed to automation script development',
        'Supported deployment processes and monitoring setup'
      ],
      achievements: [
        'Completed Docker certification program',
        'Contributed to 3 successful production deployments',
        'Developed automation scripts that reduced manual tasks by 60%'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2020 - 2021',
      type: 'Freelance',
      description: 'Delivered custom web solutions for small and medium businesses.',
      responsibilities: [
        'Developed responsive web applications using modern frameworks',
        'Designed and implemented RESTful APIs',
        'Managed client relationships and project requirements',
        'Provided technical consultation and system architecture advice',
        'Ensured code quality through testing and documentation'
      ],
      achievements: [
        'Completed 15+ successful projects for various clients',
        'Maintained 100% client satisfaction rate',
        'Built scalable solutions serving 1000+ daily users'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Professional Experience</motion.h2>
          <motion.p variants={itemVariants}>
            My journey through various roles in technology and software development
          </motion.p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-marker">
                <FaBriefcase />
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{experience.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{experience.company}</span>
                    <span className="period">
                      <FaCalendarAlt />
                      {experience.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt />
                      {experience.location}
                    </span>
                    <span className="type">{experience.type}</span>
                  </div>
                </div>

                <p className="experience-description">{experience.description}</p>

                <div className="experience-details">
                  <div className="responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
