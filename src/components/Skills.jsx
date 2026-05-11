// src/components/Skills.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiFlutter,
  SiPython, SiMysql, SiFigma,
} from "react-icons/si";
import { skills } from "../data/portfolioData";

const iconMap = {
  SiHtml5: <SiHtml5 />, SiCss3: <SiCss />, SiJavascript: <SiJavascript />,
  SiReact: <SiReact />, SiFlutter: <SiFlutter />, SiPython: <SiPython />,
  SiMysql: <SiMysql />, SiFigma: <SiFigma />,
};

const SectionTitle = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="inline-block font-rajdhani text-cyan-400 text-sm tracking-widest uppercase mb-3 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5">
      {label}
    </motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
      className="font-orbitron font-black text-4xl md:text-5xl gradient-text mb-4">{title}</motion.h2>
    {subtitle && <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
      className="text-slate-500 max-w-xl mx-auto">{subtitle}</motion.p>}
  </div>
);

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/30 transition-all cursor-default group"
    >
      <div className="flex items-center justify-between mb-4">
        {/* Icon + name */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all group-hover:scale-110"
            style={{
              background: `radial-gradient(circle, ${skill.color}25, transparent)`,
              border: `1px solid ${skill.color}40`,
              color: skill.color,
            }}
          >
            {iconMap[skill.icon]}
          </div>
          <span className="font-rajdhani font-bold text-white text-sm tracking-wide">{skill.name}</span>
        </div>
        {/* Level */}
        <span
          className="font-orbitron text-xs font-bold"
          style={{ color: skill.color, textShadow: `0 0 8px ${skill.color}60` }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar track */}
      <div className="h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 rounded-full opacity-50"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)", animation: "shimmer 2s infinite" }}
          />
        </motion.div>
      </div>

      {/* Level label */}
      <div className="mt-2 text-right">
        <span className="font-rajdhani text-xs text-slate-600">
          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Intermediate"}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="relative py-24 overflow-hidden">
    {/* Nebula decor */}
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />

    <div className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label="My Arsenal"
        title="Skills & Tech"
        subtitle="Teknologi dan tools yang saya gunakan untuk membangun pengalaman digital yang luar biasa"
      />

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>

      {/* Additional tools */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 glass-purple rounded-2xl p-6 border border-purple-500/20"
      >
        <p className="font-rajdhani text-sm tracking-widest uppercase text-purple-400 mb-4">
          🛠 Other Tools & Technologies
        </p>
        <div className="flex flex-wrap gap-3">
          {["Git & GitHub", "VS Code", "Postman", "Linux", "Node.js", "Tailwind CSS", "Bootstrap", "Firebase",
            "REST API", "Canva", "Vercel"].map((tool) => (
            <motion.span
              key={tool}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-1.5 rounded-full text-xs font-rajdhani font-semibold tracking-wider
                text-slate-300 bg-slate-800/50 border border-slate-700/60 hover:border-purple-500/40 hover:text-white cursor-default transition-all"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
