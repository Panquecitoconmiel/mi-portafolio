// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaLaravel, FaGitAlt, FaAndroid } from 'react-icons/fa';
import { SiFirebase, SiIonic, SiAngular } from 'react-icons/si'; // <--- Importa Firebase desde aquí

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Laravel', icon: <FaLaravel size={40} color="#FF2D20" /> },
  { name: 'Firebase', icon: <SiFirebase size={40} color="#FFCA28" /> }, // <--- Usa SiFirebase
  { name: 'Ionic', icon: <SiIonic size={40} color="#3880FF" /> },
  { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: 'Android', icon: <FaAndroid size={40} color="#3DDC84" /> },
];

const Skills = () => {
  return (
    <section style={{ padding: '4rem 0', background: 'rgba(255, 241, 181, 0.3)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.8rem', fontWeight: '700', textAlign: 'center', marginBottom: '2.5rem' }}>
          Tecnologías <span className="gradient-text">que domino</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ 
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
              minWidth: '100px'
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-8px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
              {skill.icon}
              <span style={{ fontWeight: '600', color: '#43302E' }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;