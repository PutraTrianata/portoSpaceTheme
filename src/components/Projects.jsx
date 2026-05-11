// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGlobe, FaGithub, FaStar, FaCode } from "react-icons/fa";
import { projects } from "../data/portfolioData";

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

// Animated preview mockup for the project
const ProjectPreview = ({ title }) => (
  <div className="relative w-full aspect-video rounded-xl overflow-hidden"
    style={{ background: "linear-gradient(135deg, #030014 0%, #0a0520 50%, #030014 100%)" }}>
    {/* Grid bg */}
    <div className="absolute inset-0 grid-bg opacity-50" />
    {/* Nebula effect */}
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(124,58,237,0.3), transparent 60%)" }} />
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 70% 60%, rgba(6,182,212,0.2), transparent 60%)" }} />

    {/* Browser chrome mockup */}
    <div className="absolute inset-3 rounded-lg glass border border-slate-700/60 overflow-hidden">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-3 h-4 bg-slate-800/80 rounded-full flex items-center px-3">
          <span className="font-rajdhani text-[9px] text-slate-600">https://putra-portfolio.vercel.app</span>
        </div>
      </div>
      {/* Content area */}
      <div className="p-4 space-y-3 relative">
        {/* Simulated hero text */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
          <div className="space-y-1.5">
            <div className="h-3 w-32 rounded-full bg-gradient-to-r from-cyan-400/60 to-purple-500/60" />
            <div className="h-2 w-24 rounded-full bg-slate-700/60" />
            <div className="h-1.5 w-20 rounded-full bg-slate-800/60" />
          </div>
          {/* Planet decoration */}
          <div className="ml-auto w-12 h-12 rounded-full flex-shrink-0"
            style={{ background: "radial-gradient(circle at 35% 35%, #7c3aed, #030014)", boxShadow: "0 0 15px rgba(124,58,237,0.5)" }}
          />
        </div>

        {/* Simulated nav */}
        <div className="flex gap-2 pt-1">
          {[24, 16, 20, 18, 22].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-slate-700/50" style={{ width: `${w}px` }} />
          ))}
        </div>

        {/* Simulated content blocks */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg p-2 border border-slate-700/30"
              style={{ background: "rgba(6,182,212,0.04)" }}>
              <div className="h-3 w-full rounded bg-cyan-500/20 mb-1.5" />
              <div className="h-1.5 w-3/4 rounded bg-slate-700/50" />
              <div className="h-1.5 w-1/2 rounded bg-slate-700/40 mt-1" />
            </div>
          ))}
        </div>

        {/* Stars in corner */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{ top: `${10 + i * 12}%`, right: `${5 + i * 5}%` }}
          />
        ))}
      </div>
    </div>

    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)" }} />

    {/* Corner badge */}
    <div className="absolute top-5 right-5 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full border border-cyan-500/30">
      <FaStar className="text-cyan-400 text-xs" />
      <span className="font-rajdhani text-xs text-cyan-300">Featured</span>
    </div>
  </div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
    className="project-card glass rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 transition-all"
    style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
  >
    {/* Preview */}
    <div className="p-5 pb-0">
      <ProjectPreview title={project.title} />
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      {/* Category + title */}
      <div>
        <span className="font-rajdhani text-xs tracking-widest uppercase text-cyan-500/70 mb-2 block">{project.category}</span>
        <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

      {/* Tech stack */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <FaCode className="text-purple-400 text-xs" />
          <span className="font-rajdhani text-xs text-slate-500 tracking-widest uppercase">Tech Stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t}
              className="px-3 py-1 rounded-full text-xs font-rajdhani font-semibold tracking-wide
                bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* CTA buttons */}
      <div className="flex gap-3 pt-1">
        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-rajdhani font-bold text-sm tracking-wide
            bg-gradient-to-r from-cyan-500 to-blue-600 text-white
            shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
        >
          <FaGlobe className="text-xs" />
          Live Demo
        </motion.a>
        <motion.a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-rajdhani font-bold text-sm tracking-wide
            border border-slate-600/60 text-slate-300 hover:border-purple-500/50 hover:text-white transition-all"
        >
          <FaGithub />
          Source Code
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="relative py-24 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
    <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

    <div className="max-w-4xl mx-auto px-6">
      <SectionTitle
        label="My Work"
        title="Projects"
        subtitle="Proyek-proyek yang telah saya bangun dengan passion dan dedikasi penuh"
      />

      <div className="grid gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* More projects teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center glass-purple rounded-2xl p-6 border border-purple-500/20"
      >
        <p className="font-rajdhani text-slate-400 mb-3">
          🚀 Lebih banyak project sedang dalam pengerjaan...
        </p>
        <a
          href="https://github.com/PutraTrianata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-rajdhani font-bold text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FaGithub />
          Lihat semua di GitHub →
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
