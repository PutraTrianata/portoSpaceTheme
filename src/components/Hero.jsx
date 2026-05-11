// src/components/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { personalInfo, typingStrings } from "../data/portfolioData";

// Build the TypeAnimation sequence from array
const buildSequence = (strings) => {
  const seq = [];
  strings.forEach((str) => {
    seq.push(str, 2200);
  });
  return seq;
};

// Animated planet/orbit decoration
const PlanetOrbit = () => (
  <div className="absolute right-4 md:right-24 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 pointer-events-none hidden sm:block">
    {/* Main planet */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {/* Orbit ring 1 */}
      <div className="absolute inset-4 rounded-full border border-cyan-500/15 flex items-start justify-center">
        {/* Small satellite */}
        <motion.div
          style={{ transformOrigin: "50% 100%" }}
          className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60 -translate-y-1/2"
        />
      </div>
      {/* Orbit ring 2 */}
      <div className="absolute inset-12 rounded-full border border-purple-500/20 flex items-end justify-center">
        <motion.div
          className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/60 translate-y-1/2"
        />
      </div>
    </motion.div>

    {/* Center planet */}
    <motion.div
      className="absolute inset-16 rounded-full overflow-hidden"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-full h-full rounded-full relative"
        style={{
          background: "radial-gradient(circle at 35% 35%, #7c3aed, #1e1060 60%, #030014)",
          boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2), inset -10px -10px 30px rgba(0,0,0,0.5)"
        }}
      >
        {/* Planet surface details */}
        <div className="absolute top-4 left-4 w-10 h-2 rounded-full bg-purple-400/20 rotate-12" />
        <div className="absolute top-8 left-6 w-6 h-1.5 rounded-full bg-cyan-400/15 rotate-6" />
        <div className="absolute bottom-6 right-4 w-8 h-2 rounded-full bg-purple-300/20 -rotate-12" />
        {/* Atmosphere glow */}
        <div className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle at 40% 40%, rgba(124,58,237,0.3), transparent 70%)" }}
        />
      </div>
    </motion.div>

    {/* Sparkle stars around planet */}
    {[...Array(8)].map((_, i) => {
      const angle = (i / 8) * 360;
      const r = 110 + Math.sin(i * 1.5) * 20;
      const x = 50 + Math.cos((angle * Math.PI) / 180) * (r / 2.3);
      const y = 50 + Math.sin((angle * Math.PI) / 180) * (r / 2.3);
      return (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      );
    })}
  </div>
);

// Animated grid lines
const GridLines = () => (
  <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
);

// Decorative hex grid cells
const NebulaBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full nebula-anim"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
    />
    <div
      className="absolute top-1/3 -right-32 w-80 h-80 rounded-full nebula-anim"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)", animationDelay: "4s" }}
    />
    <div
      className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full nebula-anim"
      style={{ background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)", animationDelay: "8s" }}
    />
  </div>
);

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <GridLines />
      <NebulaBg />
      <PlanetOrbit />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple border border-purple-500/30 text-xs font-rajdhani tracking-widest uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-glow" />
              Available for Collaboration
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="font-rajdhani text-cyan-400 text-lg tracking-widest uppercase mb-2">
            👋 Halo, Saya
          </motion.p>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="font-orbitron font-black leading-none mb-4">
            <span className="block text-5xl md:text-7xl gradient-text drop-shadow-2xl">
              {personalInfo.nickname.toUpperCase()}
            </span>
            <span className="block text-3xl md:text-4xl text-white/90 mt-1">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center gap-3">
            <span className="font-rajdhani text-slate-400 text-lg">I&apos;m a</span>
            <span className="font-rajdhani font-bold text-xl md:text-2xl text-cyan-300 text-glow-cyan">
              <TypeAnimation
                sequence={buildSequence(typingStrings)}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="font-light text-slate-400 leading-relaxed max-w-xl mb-8 text-base md:text-lg">
            {personalInfo.title} di <span className="text-cyan-400 font-medium">{personalInfo.university}</span> —
            Membangun pengalaman digital yang memukau dengan kode yang elegan dan desain yang menakjubkan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href={personalInfo.cvLink}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-rajdhani font-bold text-sm tracking-widest uppercase
                bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <FaDownload className="text-xs" />
              Download CV
            </motion.a>
            <motion.button
              onClick={() => handleScroll("contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-rajdhani font-bold text-sm tracking-widest uppercase
                bg-transparent border border-cyan-500/50 text-cyan-300
                hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white transition-all"
            >
              <FaEnvelope className="text-xs" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
            {[
              { value: "10+", label: "Projects Done" },
              { value: "3.6", label: "IPK / GPA" },
              { value: "3+", label: "Years Coding" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron font-black text-2xl gradient-text">{stat.value}</div>
                <div className="font-rajdhani text-xs text-slate-500 tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="font-rajdhani text-xs tracking-widest uppercase">Scroll Down</span>
        <FaChevronDown />
      </motion.button>
    </section>
  );
};

export default Hero;
