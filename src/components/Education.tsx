import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaUsers, FaSeedling, FaFlagCheckered } from 'react-icons/fa';

const Education: React.FC = () => {
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

  const rotaryCards = [
    {
      title: 'DRR Elect, D9216',
      body: 'Inaugural District Rotaract Representative for D9216. Governance: 2,000+ Rotaractors across 5 regions. Term: July 2026 - June 2027. D9212 governing council member.',
      icon: <FaHandsHelping />
    },
    {
      title: 'RAC Youth Connect Kenya - 2023-2024',
      body: 'Charter President. Grew to 45 charter members. Motto: Groove · Connect · Impact. Charter dinner: Swiss Lenana Mount Hotel. Parent club for Interact Chania.',
      icon: <FaUsers />
    },
    {
      title: 'Urban Oasis Initiative',
      body: 'Led Phase 1 & 2 of urban vertical gardening at Muthiga Hope Centre, Gatundu. Addresses food insecurity through AgriTech and smart agricultural planning.',
      icon: <FaSeedling />
    },
    {
      title: 'Club Chartering & Mentorship',
      body: 'Supported 3 club charters in one cycle: 1 Rotary, 1 Rotaract, 1 Interact (Interact Chania). Mentorship lineage: RAC Youth Connect Kenya -> Interact Chania. Progression: Charter President to Assistant District Representative (2024-2025) to Regional Coordinator (2025-2026).',
      icon: <FaFlagCheckered />
    }
  ];

  return (
    <section id="rotary" className="section rotary-section">
      <div className="container">
        <motion.div
          className="section-title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Service above self - leading 2,000+ young leaders across East Africa</motion.h2>
          <motion.p variants={itemVariants}>
            Alongside my engineering work, I serve as the District Rotaract Representative Elect for Rotary District 9216 - a newly formed district spanning Ethiopia, Mt Kenya, the Kenyan Coast, Thika, and Nairobi. It's a governance role covering 2,000+ young leaders, and I'm the inaugural DRR appointed to the district.
          </motion.p>
          <motion.p variants={itemVariants}>
            I helped co-found RAC Youth Connect Kenya - with 45+ charter members strong - and have supported the chartering of three clubs in a single cycle. I built the district's management system myself. Because if you lead people, you should also build the tools they use.
          </motion.p>
        </motion.div>

        <motion.div
          className="rotary-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rotaryCards.map((card) => (
            <motion.article
              key={card.title}
              className="rotary-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="rotary-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
