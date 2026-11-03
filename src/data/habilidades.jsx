// src/data/habilidades.jsx
// Tecnologías agrupadas por categoría (íconos de react-icons).
import { 
  FaReact, FaLaravel, FaGitAlt, FaAndroid, FaHtml5, FaCss3Alt, FaPhp, FaPalette,
  FaFileExcel, FaWindows, FaShieldAlt, FaCashRegister, FaDatabase, FaClipboardList
} from 'react-icons/fa';
import { 
  SiFirebase, SiIonic, SiAngular, SiMysql, SiSqlite, SiJavascript, 
  SiTypescript, SiFigma, SiNotion, SiWix, SiTailwindcss 
} from 'react-icons/si';

export const skillCategories = [
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
