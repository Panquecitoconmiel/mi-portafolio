// src/components/Skills.jsx
import React, { useState } from 'react';
import { 
  FaReact, FaLaravel, FaGitAlt, FaAndroid, FaHtml5, FaCss3Alt, FaPhp, FaPalette, FaChevronDown 
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
    <section style={{ padding: '4rem 0', background: 'rgba(255, 241, 181, 0.3)' }}>
      <div className="container">
        <h2 
          style={{ fontSize: '2.8rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem' }} 
          data-aos="fade-up"
        >
          Tecnologías <span className="gradient-text">que domino</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '900px', margin: '0 auto' }}>
          {skillCategories.map((category, catIndex) => {
            const isOpen = openCategories.includes(catIndex);
            return (
              <div 
                key={catIndex} 
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(67,48,46,0.08)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.4)'
                }}
                data-aos="fade-up"
              >
                {/* Header clickeable */}
                <button
                  onClick={() => toggleCategory(catIndex)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.3rem 2rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#43302E',
                    fontFamily: 'inherit'
                  }}
                >
                  {category.title}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown color="#43302E" />
                  </motion.div>
                </button>

                {/* Contenido desplegable */}
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
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '1.5rem', 
                        padding: '0.5rem 2rem 2rem' 
                      }}>
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.06 }}
                            style={{ 
                              display: 'flex', 
                              flexDirection: 'column', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              background: 'rgba(255,255,255,0.7)',
                              padding: '1.2rem 1.6rem',
                              borderRadius: '16px',
                              boxShadow: '0 6px 18px rgba(67,48,46,0.06)',
                              transition: '0.3s',
                              minWidth: '90px',
                              cursor: 'default'
                            }}
                            whileHover={{ 
                              y: -6,
                              boxShadow: '0 15px 30px rgba(67,48,46,0.15)',
                              background: 'rgba(255,255,255,1)'
                            }}
                          >
                            {skill.icon}
                            <span style={{ fontWeight: '600', color: '#43302E', fontSize: '0.9rem' }}>
                              {skill.name}
                            </span>
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