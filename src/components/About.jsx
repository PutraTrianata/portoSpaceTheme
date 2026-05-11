// src/components/About.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaHeart, FaQuoteLeft, FaUser } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import fotoProfile from '../assets/foto.png';

const SectionTitle = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block font-rajdhani text-cyan-400 text-sm tracking-widest uppercase mb-3 
        px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5"
    >
      {label}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-orbitron font-black text-4xl md:text-5xl gradient-text mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// Avatar placeholder with cosmic style
// GANTI SELURUH COMPONENT Avatar MENJADI INI

const Avatar = () => (
  <div className="relative w-52 h-52 mx-auto">
    {/* Outer ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
    />

    {/* Inner glow ring */}
    <div
      className="absolute inset-3 rounded-full border border-purple-500/40"
      style={{ boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
    />

    {/* FOTO PROFILE */}
    <div
      className="absolute inset-5 rounded-full overflow-hidden"
      style={{
        boxShadow:
          "0 0 30px rgba(124,58,237,0.4), inset 0 0 20px rgba(6,182,212,0.1)",
      }}
    >
      <img
        src={fotoProfile}
        alt="Profile"
        className="w-full h-full object-cover"
      />

      {/* overlay gelap */}
      <div className="absolute inset-0 bg-black/10" />
    </div>

    {/* Orbiting dot */}
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-cyan-400"
      style={{
        top: "8%",
        left: "50%",
        transformOrigin: "0 96px",
        boxShadow: "0 0 8px rgba(6,182,212,0.8)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Nebula bg */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="Who I Am" title="About Me" subtitle="Kenali lebih dekat tentang saya dan perjalanan saya di dunia teknologi" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left – Avatar + decorative info */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
            <Avatar />

            {/* Mini info chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: "🎓", text: "Informatika" },
                { icon: "📍", text: "Indonesia" },
                { icon: "💡", text: "Full-Stack" },
                { icon: "🚀", text: "2023" },
              ].map((chip) => (
                <span key={chip.text} className="glass px-4 py-1.5 rounded-full text-sm font-rajdhani text-slate-300 border border-slate-700/50">
                  {chip.icon} {chip.text}
                </span>
              ))}
            </div>

            {/* Motto */}
            <div className="glass-purple rounded-2xl p-5 max-w-sm w-full relative">
              <FaQuoteLeft className="absolute top-3 left-3 text-purple-500/40 text-xl" />
              <p className="font-light italic text-slate-300 text-center text-sm leading-relaxed pt-2">
                {personalInfo.motto}
              </p>
            </div>
          </motion.div>

          {/* Right – Info text */}
          <div className="space-y-6">
            {/* About text */}
            <motion.div variants={itemVariants}>
              <h3 className="font-orbitron font-bold text-xl gradient-text-2 mb-3">
                Hello, World! 👨‍💻
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {personalInfo.about}
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-5 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-cyan-400 text-lg" />
                </div>
                <div>
                  <p className="font-rajdhani font-bold text-white text-sm tracking-wide">{personalInfo.education.degree}</p>
                  <p className="text-cyan-400 text-xs font-rajdhani mt-0.5">{personalInfo.education.university}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-slate-500 text-xs font-rajdhani">{personalInfo.education.year}</span>
                    <span className="text-slate-500 text-xs font-rajdhani">IPK: <span className="text-purple-300">{personalInfo.education.gpa}</span></span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-3">
                <FaHeart className="text-pink-500 text-sm" />
                <span className="font-rajdhani font-semibold text-sm tracking-widest uppercase text-slate-400">Hobi & Minat</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.hobbies.map((hobby) => (
                  <motion.span
                    key={hobby}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-purple px-4 py-2 rounded-full text-sm font-rajdhani text-purple-200 cursor-default border border-purple-500/20 hover:border-purple-400/40 transition-all"
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Skills highlight bar */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: "Frontend", color: "from-cyan-500 to-blue-600" },
                { label: "Backend", color: "from-purple-500 to-violet-700" },
                { label: "Design", color: "from-pink-500 to-rose-600" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-3 text-center border border-slate-700/50 hover:border-slate-500/50 transition-all">
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${item.color} mb-2`} />
                  <span className="font-rajdhani text-xs text-slate-400 tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
