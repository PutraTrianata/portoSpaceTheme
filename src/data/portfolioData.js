// src/data/portfolioData.js
// =============================================
// GANTI SEMUA DATA DI SINI SESUAI PROFILMU
// =============================================

export const personalInfo = {
  name: "Putra Trianata",
  nickname: "Putra",
  title: "Mahasiswa Teknik Informatika",
  university: "Institut Teknologi Adhi Tama Surabaya",
  batch: "Angkatan 2023",
  email: "putraanata454@gmail.com",
  whatsapp: "+62 851-7549-0454",
  github: "https://github.com/PutraTrianata",
  instagram: "https://instagram.com/putratrn_",
  linkedin: "https://linkedin.com/in/PutraTrianata",
  cvLink: "#", // Ganti dengan link Google Drive CV kamu
  about: `Saya adalah seorang mahasiswa Teknik Informatika yang passionate dalam dunia pengembangan web dan teknologi digital. 
  Dengan semangat belajar yang tinggi, saya selalu berusaha untuk menghadirkan solusi inovatif dan kreatif dalam setiap project yang saya kerjakan.`,
  motto: "\"Code is poetry — setiap baris menciptakan dunia baru.\"",
  hobbies: ["💻 Coding", "🎮 Gaming", "📚 Reading", "🎵 Music", "🚀 Space Exploration"],
  education: {
    degree: "S1 Teknik Informatika",
    university: "Institut Teknologi Adhi Tama Surabaya",
    year: "2023 – Sekarang",
    gpa: "3.6 / 4.00",
  },
};

export const skills = [
  { name: "HTML5", level: 92, color: "#e34f26", icon: "SiHtml5" },
  { name: "CSS3", level: 88, color: "#1572b6", icon: "SiCss3" },
  { name: "JavaScript", level: 82, color: "#f7df1e", icon: "SiJavascript" },
  { name: "React JS", level: 78, color: "#61dafb", icon: "SiReact" },
  { name: "Flutter", level: 70, color: "#02569b", icon: "SiFlutter" },
  { name: "Python", level: 75, color: "#3776ab", icon: "SiPython" },
  { name: "MySQL", level: 72, color: "#4479a1", icon: "SiMysql" },
  { name: "UI/UX Design", level: 80, color: "#ec4899", icon: "SiFigma" },
];

export const projects = [
  {
    id: 1,
    title: "Space Portfolio Website",
    category: "Web Development",
    description:
      "Website portfolio pribadi bertema galaksi yang dibangun menggunakan React.js, Vite, dan Tailwind CSS. Menampilkan animasi bintang interaktif, efek glassmorphism, dan desain futuristik yang modern.",
    longDescription:
      "Project ini merupakan portfolio pribadi yang dirancang dengan konsep Space / Galaxy Theme. Menggunakan teknologi modern seperti React.js untuk komponen UI yang dinamis, Framer Motion untuk animasi yang halus, dan tsParticles untuk efek bintang interaktif.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "tsParticles"],
    image: null, // Akan diganti dengan screenshot
    liveDemo: "#",
    sourceCode: "https://github.com/rizkyfirmansyah/space-portfolio",
    featured: true,
    color: "#06b6d4",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typingStrings = [
  "Web Developer",
  "UI Designer",
  "React Enthusiast",
  "Flutter Developer",
  "Problem Solver",
  "Tech Innovator",
];
