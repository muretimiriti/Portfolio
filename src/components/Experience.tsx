import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const experiences = [
    {
      title: 'Application Support Specialist',
      company: 'Diamond Trust Bank',
      location: 'Nairobi, Kenya · On-site',
      period: 'Jan 2026 - Present',
      type: 'Junior DevOps & System Engineer',
      responsibilities: [
        'Design and maintain CI/CD pipelines (Tekton) improving deployment speed and release confidence.',
        'Manage containerised infrastructure (Docker + Kubernetes) across cloud environments.',
        'Provision and maintain infrastructure with Terraform and Ansible (IaC).'
      ],
      tags: ['Docker', 'Kubernetes', 'Tekton', 'Terraform', 'Ansible', 'DevSecOps']
    },
    {
      title: 'Co-founder & Tech Lead',
      company: 'Perception Pro',
      location: 'Nairobi, Kenya · Hybrid',
      period: 'Jan 2025 - Present',
      type: 'Co-founder',
      responsibilities: [
        'Co-founded the venture and own technical architecture and engineering roadmap.',
        'Lead engineering team hiring, onboarding, and cross-functional delivery.',
        'Manage containerised stack, CI/CD pipelines, and supporting infrastructure.'
      ],
      tags: ['Co-founder', 'Architecture', 'CI/CD', 'Docker', 'Team building']
    },
    {
      title: 'Co-founder, Tech Lead & Team Building Lead',
      company: 'Art of Kwizzez',
      location: 'Nairobi, Kenya · Hybrid',
      period: 'Jan 2026 - Present',
      type: 'Co-founder',
      responsibilities: [
        'Co-founded a game development and live-event delivery platform.',
        'Lead platform architecture, DevOps pipeline, and gaming module design.',
        'Coordinate delivery across engineering and creative teams.'
      ],
      tags: ['Game dev', 'Live events', 'Next.js', 'React', 'Team leadership']
    },
    {
      title: 'Web Developer',
      company: 'VinedFastside',
      location: 'Nairobi, Kenya · Remote · Contract',
      period: 'Jan 2024 - Jan 2026',
      type: 'Contract',
      responsibilities: [
        'Built and maintained web applications supporting cleaning operations in Kenya.',
        'Collaborated with designers and stakeholders to deliver business-ready features.',
        'Optimised website performance and UX for the East African web context.'
      ],
      tags: ['Next.js', 'Node.js', 'Web development', 'Remote delivery']
    },
    {
      title: 'District Rotaract Representative Elect',
      company: 'Rotary International, District 9216',
      location: 'East Africa · Volunteer Leadership',
      period: 'Jan 2020 - Present (member of Rotary International)',
      type: 'Governance',
      responsibilities: [
        'Inaugural DRR for newly formed D9216 with term commencing July 2026.',
        'Governance scope covering 2,000+ Rotaractors across five East African regions.',
        'Built district management system and supported chartering of three clubs in one cycle.'
      ],
      tags: ['Governance', 'Leadership', 'D9216', '2,000+ members', 'AgriTech']
    },
    {
      title: 'Marketing Associate',
      company: 'Blooms and Beats',
      location: 'Nairobi, Kenya · Hybrid · Apprenticeship',
      period: 'Nov 2019 - Apr 2024',
      type: 'Apprenticeship',
      responsibilities: [
        'Handled communication, event marketing, and brand-building responsibilities.',
        'Contributed to campaign planning and delivery across multiple events.',
        'Built strong foundations in audience engagement and operational discipline.'
      ],
      tags: ['Marketing', 'Communication', 'Events', 'Brand']
    },
    {
      title: 'Bachelor of Science - Computer Technology',
      company: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
      location: 'Nairobi, Kenya',
      period: 'Sep 2019 - Nov 2023',
      type: 'Education',
      responsibilities: [
        'Focused on networking, systems design, requirements definition, and 14+ technical disciplines.',
        'Balanced technical studies with active involvement in rugby and Rotary.',
        'Built strong systems-thinking and engineering fundamentals.'
      ],
      tags: ['JKUAT', 'Computer Technology', 'Networking']
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
          <motion.h2 variants={itemVariants}>Experience Timeline</motion.h2>
          <motion.p variants={itemVariants}>
            Most recent roles first, spanning infrastructure engineering, ventures, and leadership.
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
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
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
                    <span className="period">{experience.period}</span>
                    <span className="location">{experience.location}</span>
                    <span className="type">{experience.type}</span>
                  </div>
                </div>

                <div className="experience-details">
                  <div className="responsibilities">
                    <ul>
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
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
