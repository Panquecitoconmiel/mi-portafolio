// src/components/Skills.jsx
import React, { useState } from 'react';
import { 
  FaReact, FaLaravel, FaGitAlt, FaAndroid, FaHtml5, FaCss3Alt, FaPhp, FaPalette, FaChevronDown,
  FaFileExcel, FaWindows, FaShieldAlt, FaCashRegister, FaDatabase, FaClipboardList
} from 'react-icons/fa';
import { 
  SiFirebase, SiIonic, SiAngular, SiMysql, SiSqlite, SiJavascript, 
  SiTypescript, SiFigma, SiNotion, SiWix, SiTailwindcss 
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    title: 'Desarrollo',
    skills: [
      { name: 'React', icon: <FaReact size={38} color="#61DAFB" /> },
      { name: 'Laravel', icon: <FaLaravel size={38} color="#FF2D20" /> },
      { name: 'PHP', icon: <FaPhp size={38} color="#777BB4" /> },
      { name: 'JavaScript', icon: <SiJavascript size={38} color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript size={38} color="#3178C6" /> },
      { name: 'Ionic', icon: <SiIonic size={38} color="#3880FF" /> },
      { name: 'Angular', icon: <SiAngular size={38} color="#DD0031" /> },
      { name: 'Android', icon: <FaAndroid size={38} color="#3DDC84" /> },
      { name: 'Firebase', icon: <SiFirebase size={38} color="#FFCA28" /> },
      { name: 'HTML5', icon: <FaHtml5 size={38} color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={38} color="#1572B6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={38} color="#38BDF8" /> },
      { name: 'Git', icon: <FaGitAlt size={38} color="#F05032" /> },
    ]
  },
  {
    title: 'Base de Datos',
    skills: [
      { name: 'MySQL', icon: <SiMysql size={38} color="#4479A1" /> },
      { name: 'SQLite', icon: <SiSqlite size={38} color="#003B57" /> },
      { name: 'Firebase Firestore', icon: <SiFirebase size={38} color="#FFCA28" /> },
    ]
  },
  {
    title: 'Diseño & Organización',
    skills: [
      { name: 'Figma', icon: <SiFigma size={38} color="#F24E1E" /> },
      { name: 'Notion', icon: <SiNotion size={38} color="#000000" /> },
      { name: 'Canva', icon: <FaPalette size={38} color="#00C4CC" /> },
    ]
  },
  {
    title: 'Administración & Ofimática',
    skills: [
      { name: 'Excel avanzado', icon: <FaFileExcel size={38} color="#207245" /> },
      { name: 'Bases de datos', icon: <FaDatabase size={38} color="var(--berry)" /> },
      { name: 'Windows', icon: <FaWindows size={38} color="#0078D4" /> },
      { name: 'Seguridad informática', icon: <FaShieldAlt size={38} color="var(--berry)" /> },
      { name: 'Sistemas POS / ERP', icon: <FaCashRegister size={38} color="var(--berry)" /> },
      { name: 'Informes e inventarios', icon: <FaClipboardList size={38} color="var(--berry)" /> },
    ]
  },
  {
    title: 'Páginas Web sin Programar',
    skills: [
      { name: 'Wix', icon: <SiWix size={38} color="#0C6EFC" /> },
    ]
  },
];

const Skills = () => {
  // Guarda qué categorías están abiertas. Por defecto, todas abiertas.
  const [openCategories, setOpenCategories] = useState(
    skillCategories.map((_, i) => i)
  );

  const toggleCategory = (index) => {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section style={{ background: 'var(--section-bg)' }}>
      <div className="container">
        <div className="eyebrow" data-aos="fade-up">Lo que sé usar</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">02</span>
          <h2>
            Tecnologías <span className="gradient-text">que domino</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '900px', margin: '2.5rem auto 0' }}>
          {skillCategories.map((category, catIndex) => {
            const isOpen = openCategories.includes(catIndex);
            return (
              <div key={catIndex} className="patch" style={{ padding: 0 }} data-aos="fade-up">
                <button
                  className="skill-toggle"
                  onClick={() => toggleCategory(catIndex)}
                  aria-expanded={isOpen}
                >
                  {category.title}
                  <motion.span
                    className="chev"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '0.3rem 2rem 2rem' }}>
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            className="skill-tile"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -6, rotate: index % 2 ? 2 : -2 }}
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;