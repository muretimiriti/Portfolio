import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

type ProjectCategory = 'DevOps & Infrastructure' | 'Full-Stack Systems' | 'Startups' | 'Community';

type ProjectEntry = {
  title: string;
  category: ProjectCategory;
  featured: boolean;
  scope: string;
  description: string;
  stack: string[];
};

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

  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  const projects: ProjectEntry[] = [
    {
      title: 'D9216 District Management & Reporting System',
      category: 'Community',
      featured: true,
      scope: 'District-wide governance platform for 2,000+ Rotaractors',
      description: 'A district-wide management and reporting tool serving the full governing council of Rotaract District 9216 across Ethiopia, Mt Kenya, Coast, Thika, and Lower Nairobi. Replaced manual workflows with structured digital operations for member tracking, event reporting, club governance, and council communication. Built and delivered solo, now in active use.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Role-based access', 'Reporting automation']
    },
    {
      title: 'DTB Banking DevSecOps Delivery System',
      category: 'DevOps & Infrastructure',
      featured: true,
      scope: 'Banking-grade CI/CD and platform reliability workflow',
      description: 'A secure DevSecOps delivery workflow for critical banking applications. Covers CI/CD pipeline governance, container image controls, deployment validation gates, rollback strategy, and observability hooks to support incident response and release confidence.',
      stack: ['Tekton', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'DevSecOps']
    },
    {
      title: 'Kora Factory Production Management',
      category: 'Startups',
      featured: true,
      scope: 'End-to-end production lifecycle control system',
      description: 'A factory production management module in active development covering raw material tracking, scheduling, work orders, quality checkpoints, output logging, and production reporting. Built for manufacturing environments moving away from fragmented manual processes.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Workflow engine', 'Audit logging']
    },
    {
      title: 'Art of Kwizzez Gaming & Live Events Platform',
      category: 'Startups',
      featured: true,
      scope: 'Real-time quiz-game creation and live session delivery',
      description: 'The technology platform for Art of Kwizzez, powering game creation, live session management, audience participation, scoring, and event host operations. Built to support both player-facing and operator dashboard experiences.',
      stack: ['Next.js', 'React', 'Real-time scoring', 'Event orchestration', 'DevOps pipeline']
    },
    {
      title: 'Perception Pro Platform Architecture',
      category: 'Startups',
      featured: false,
      scope: 'Co-founded venture platform and technical foundation',
      description: 'Core product architecture and engineering roadmap for Perception Pro. Scope includes infrastructure design, delivery workflow, service architecture decisions, and team-oriented implementation practices.',
      stack: ['Architecture', 'CI/CD', 'Containerisation', 'Team delivery', 'Roadmap ownership']
    },
    {
      title: 'Hospital Management System',
      category: 'Full-Stack Systems',
      featured: false,
      scope: 'Clinical operations and records workflow system',
      description: 'A full-stack hospital management platform covering patient registration, appointment scheduling, ward management, medical records, billing, and staff administration. Built with role-based control and audit trail requirements suitable for a medical context.',
      stack: ['FastAPI', 'PostgreSQL', 'React', 'RBAC', 'Audit trails']
    },
    {
      title: 'Reporting & SLA Escalation System',
      category: 'Full-Stack Systems',
      featured: false,
      scope: 'Configurable escalation and issue resolution workflow',
      description: 'A reporting and escalation module for organisations with multi-tier service delivery. Supports structured report submission, routing, SLA-based escalation triggers, and resolution tracking with configurable workflow logic.',
      stack: ['Workflow rules', 'SLA automation', 'Escalation routing', 'Notifications']
    },
    {
      title: 'Boutique Shop & Wardrobe Operations System',
      category: 'Full-Stack Systems',
      featured: false,
      scope: 'Retail back-office operations for fashion inventory and POS',
      description: 'A boutique-focused management system with product catalogue handling, variant-aware inventory, POS workflows, customer order history, and analytics on stock movement for small-to-medium retail operations.',
      stack: ['Inventory engine', 'POS workflows', 'Variant management', 'Order history']
    },
    {
      title: 'Production E-commerce Platform',
      category: 'Full-Stack Systems',
      featured: false,
      scope: 'SEO-focused storefront to order fulfilment architecture',
      description: 'A production-ready e-commerce system with product listings, cart management, user accounts, order tracking, and payments. Implemented with Next.js App Router for storefront performance and backend workflows for inventory and fulfilment.',
      stack: ['Next.js App Router', 'Order workflow', 'Payments', 'Inventory management']
    },
    {
      title: 'Luxury Gift E-commerce + Customisation Studio',
      category: 'Full-Stack Systems',
      featured: false,
      scope: 'Multi-collection commerce with personalised gift workflows',
      description: 'A luxury gift commerce build with Ladies (mocha/gold) and Gents (midnight/gold) collections, Fabric.js customisation studio, Pesapal integration, WhatsApp notifications, and full order tracking timeline. Active multi-phase implementation.',
      stack: ['Fabric.js', 'Pesapal', 'WhatsApp Business API', 'Order timeline', 'DevOps']
    },
    {
      title: 'VinedFastside Operations Web Applications',
      category: 'Community',
      featured: false,
      scope: 'Client-facing service operations for Kenya and Tanzania growth',
      description: 'Built and maintained web applications for a cleaning company operating in Kenya with Tanzania expansion goals. Delivered booking and service workflows while optimising performance and UX for East African connectivity realities across a 2-year contract.',
      stack: ['Next.js', 'Node.js', 'Service workflows', 'Performance optimisation']
    },
    {
      title: 'Urban Oasis Initiative Delivery Module',
      category: 'Community',
      featured: false,
      scope: 'AgriTech-enabled food security delivery at Muthiga Hope Centre',
      description: 'Led Phase 1 and 2 implementation of an urban vertical gardening initiative in Gatundu under RAC Youth Connect Kenya. Focused on practical food security delivery, planning workflows, and impact tracking in underserved communities.',
      stack: ['AgriTech advocacy', 'Project coordination', 'Impact reporting']
    }
  ];

  const filters: Array<'All' | ProjectCategory> = [
    'All',
    'DevOps & Infrastructure',
    'Full-Stack Systems',
    'Startups',
    'Community'
  ];

  const visibleProjects = useMemo(() => {
    const list = projects.filter((project) => (
      project.featured || activeFilter === 'All' || project.category === activeFilter
    ));

    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [activeFilter]);

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
          <motion.h2 variants={itemVariants}>Projects & Systems</motion.h2>
          <motion.p variants={itemVariants}>
            11 production and in-flight systems across infrastructure, full-stack delivery, startups, and community impact.
          </motion.p>
        </motion.div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-topline">
                <span className="project-category">{project.category}</span>
                {project.featured && (
                  <span className="project-featured-badge">
                    <FaStar /> Featured
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-scope">{project.scope}</p>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
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
