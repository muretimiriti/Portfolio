import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import canavilleImg from '../assets/canaville.png';
import kikwetuImg from '../assets/kikwetu.png';
import malikaleImg from '../assets/malikale.png';
import muthigaImg from '../assets/muthiga.png';
import bloomsImg from '../assets/Blooms.png';
import jujaImg from '../assets/juja.png';
import keylightImg from '../assets/keylight 1.png';
import kraImg from '../assets/kra.png';
import perceptionImg from '../assets/perception.png';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Canaville Resort Website',
      description: 'A comprehensive resort website featuring accommodation booking, facilities showcase, and guest services. Built with modern web technologies for optimal user experience.',
      image: canavilleImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS3'],
      features: [
        'Online booking system',
        'Room availability management',
        'Guest portal integration',
        'Responsive design',
        'Payment gateway integration'
      ],
      github: 'https://github.com/victor-mureti/canaville-resort',
      demo: 'https://canavilleresort.co.ke/',
      status: 'Completed'
    },
    {
      title: 'Kikwetu Community Platform',
      description: 'A community-focused web platform designed to connect local communities and facilitate social interactions. Features include user profiles, event management, and community forums.',
      image: kikwetuImg,
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Bootstrap'],
      features: [
        'User authentication & profiles',
        'Event management system',
        'Community forums',
        'Real-time messaging',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/victor-mureti/kikwetu-platform',
      demo: 'https://kikwetu.co.ke/',
      status: 'Completed'
    },
    {
      title: 'Muthiga Hope Centre Website',
      description: 'A nonprofit organization website showcasing community programs, donation systems, and volunteer opportunities. Built with accessibility and user engagement in mind.',
      image: muthigaImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'CSS3'],
      features: [
        'Donation processing system',
        'Volunteer registration',
        'Program showcase',
        'News & updates section',
        'Contact management'
      ],
      github: 'https://github.com/victor-mureti/muthiga-hope-centre',
      demo: 'https://muthigahopecentre.co.ke/',
      status: 'Completed'
    },
    {
      title: 'Mali Kale Safaris Website',
      description: 'A comprehensive safari tourism website featuring safari packages, booking system, and destination information. Designed to showcase Tanzania\'s wildlife and tourism offerings.',
      image: malikaleImg,
      technologies: ['React', 'Express.js', 'MongoDB', 'Payment Gateway', 'Responsive Design'],
      features: [
        'Safari package booking',
        'Itinerary management',
        'Photo gallery integration',
        'Multi-language support',
        'SEO optimization'
      ],
      github: 'https://github.com/victor-mureti/mali-kale-safaris',
      demo: 'https://malikale.com/',
      status: 'Completed'
    },
    {
      title: 'Blooms and Beats Ticketing System',
      description: 'A microservices-based ticketing system designed with containerization and Daraja API integration. Currently finishing up the pipeline for Kubernetes deployment.',
      image: bloomsImg,
      technologies: ['Microservices', 'Docker', 'Kubernetes', 'FastAPI', 'Daraja API'],
      features: [
        'Microservices architecture',
        'Container orchestration',
        'Payment integration (Daraja API)',
        'Event ticketing system',
        'Kubernetes deployment pipeline'
      ],
      github: 'https://github.com/victor-mureti/blooms-beats-ticketing',
      demo: null,
      status: 'In Progress'
    },
    {
      title: 'Rotary Club of Juja Website',
      description: 'An informative website for the Rotary Club of Juja showcasing their community service projects, events, and membership information. Ready for deployment.',
      image: jujaImg,
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'CSS3', 'Responsive Design'],
      features: [
        'Community service showcase',
        'Event management',
        'Member directory',
        'News & updates',
        'Contact information'
      ],
      github: 'https://github.com/victor-mureti/rotary-juja',
      demo: null,
      status: 'Ready for Deployment'
    },
    {
      title: 'Keylight Electrical & Packaging Brand',
      description: 'A professional website for an electrical and packaging company showcasing their services, products, and expertise. Awaiting deployment.',
      image: keylightImg,
      technologies: ['React', 'FastAPI', 'MongoDB', 'CSS3', 'Bootstrap'],
      features: [
        'Service portfolio showcase',
        'Product catalog',
        'Company information',
        'Contact forms',
        'Responsive design'
      ],
      github: 'https://github.com/victor-mureti/keylight-brand',
      demo: null,
      status: 'Ready for Deployment'
    },
    {
      title: 'KRA Tax Explorer System',
      description: 'A tax exploration system demo implemented with FastAPI, designed to help users navigate and understand tax regulations and calculations.',
      image: kraImg,
      technologies: ['FastAPI', 'Python', 'PostgreSQL', 'React', 'REST API'],
      features: [
        'Tax calculation engine',
        'Regulation database',
        'User-friendly interface',
        'API documentation',
        'Data visualization'
      ],
      github: 'https://github.com/victor-mureti/kra-tax-explorer',
      demo: null,
      status: 'Demo Completed'
    },
    {
      title: 'Perception Pro Business Platform',
      description: 'A professional business platform designed for service providers to showcase their offerings, manage clients, and streamline business operations. Features modern branding with "We Build Loud Brands" approach.',
      image: perceptionImg,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS'],
      features: [
        'Client management system',
        'Service portfolio showcase',
        'Appointment scheduling',
        'Business analytics dashboard',
        'Multi-user role management',
        'Modern branding design'
      ],
      github: 'https://github.com/victor-mureti/perception-pro',
      demo: 'https://perceptionpro.co.ke/',
      status: 'Completed'
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive hospital management system handling patient records, appointments, billing, and staff management. Built with FastAPI and REST API architecture.',
      image: '/api/placeholder/400/250',
      technologies: ['FastAPI', 'REST API', 'PostgreSQL', 'React', 'Docker'],
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Billing system',
        'Staff management',
        'Medical history tracking'
      ],
      github: 'https://github.com/victor-mureti/hospital-management',
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Wardrobe Management System',
      description: 'A personal wardrobe management system helping users organize their clothing, track outfits, and manage their fashion inventory.',
      image: '/api/placeholder/400/250',
      technologies: ['FastAPI', 'REST API', 'MongoDB', 'React', 'Image Processing'],
      features: [
        'Clothing inventory management',
        'Outfit planning',
        'Image upload & processing',
        'Seasonal organization',
        'Style recommendations'
      ],
      github: 'https://github.com/victor-mureti/wardrobe-management',
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Gift Shop Management System',
      description: 'A complete gift shop management system handling inventory, sales, customer management, and reporting. Built with modern API architecture.',
      image: '/api/placeholder/400/250',
      technologies: ['FastAPI', 'REST API', 'PostgreSQL', 'React', 'Payment Gateway'],
      features: [
        'Inventory management',
        'Sales tracking',
        'Customer database',
        'Payment processing',
        'Analytics & reporting'
      ],
      github: 'https://github.com/victor-mureti/gift-shop-management',
      demo: null,
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Featured Projects</motion.h2>
          <motion.p variants={itemVariants}>
            A showcase of my recent work and technical implementations
          </motion.p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-screenshot"
                />
                <div className="project-status">{project.status}</div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
