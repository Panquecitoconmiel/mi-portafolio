// src/components/Skills.jsx
import React from 'react';
import { 
  FaReact, FaLaravel, FaGitAlt, FaAndroid, FaHtml5, FaCss3Alt, FaPhp, FaPalette 
} from 'react-icons/fa';
import { 
  SiFirebase, SiIonic, SiAngular, SiMysql, SiSqlite, SiJavascript, 
  SiTypescript, SiFigma, SiNotion, SiWix, SiTailwindcss 
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Desarrollo',
    skills: [
      { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
      { name: 'Laravel', icon: <FaLaravel size={40} color="#FF2D20" /> },
      { name: 'PHP', icon: <FaPhp size={40} color="#777BB4" /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
      { name: 'Ionic', icon: <SiIonic size={40} color="#3880FF" /> },
      { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
      { name: 'Android', icon: <FaAndroid size={40} color="#3DDC84" /> },
      { name: 'Firebase', icon: <SiFirebase size={40} color="#FFCA28" /> },
      { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38BDF8" /> },
      { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
    ]
  },
  {
    title: 'Base de Datos',
    skills: [
      { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
      { name: 'SQLite', icon: <SiSqlite size={40} color="#003B57" /> },
      { name: 'Firebase Firestore', icon: <SiFirebase size={40} color="#FFCA28" /> },
    ]
  },
  {
    title: 'Diseño en Figma',
    skills: [
      { name: 'Figma', icon: <SiFigma size={40} color="#F24E1E" /> },
    ]
  },
  {
    title: 'Organización en Notion',
    skills: [
      { name: 'Notion', icon: <SiNotion size={40} color="#000000" /> },
    ]
  },
  {
    title: 'Diseño en Canva',
    skills: [
      { name: 'Canva', icon: <FaPalette size={40} color="#00C4CC" /> },
    ]
  },
  {
    title: 'Páginas Web sin Programar',
    skills: [
      { name: 'Wix', icon: <SiWix size={40} color="#0C6EFC" /> },
    ]
  },
];

const Skills = () => {
  return (
    <section style={{ padding: '4rem 0', background: 'rgba(255, 241, 181, 0.3)' }}>
      <div className="container">
        <h2 
          style={{ fontSize: '2.8rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem' }} 
          data-aos="fade-up"
        >
          Tecnologías <span className="gradient-text">que domino</span>
        </h2>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: '3rem' }}>
            <h3 
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#43302E', 
                marginBottom: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                paddingBottom: '0.5rem',
                borderBottom: '3px solid #C1DBE8'
              }}
              data-aos="fade-up"
            >
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.5rem 2rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(67,48,46,0.08)',
                    transition: '0.3s',
                    minWidth: '100px',
                    cursor: 'default'
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(67,48,46,0.15)',
                    background: 'rgba(255,255,255,0.9)'
                  }}
                >
                  {skill.icon}
                  <span style={{ fontWeight: '600', color: '#43302E' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;