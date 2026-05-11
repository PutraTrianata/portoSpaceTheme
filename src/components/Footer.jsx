// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaHeart, FaRocket, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/60 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Nebula bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.05), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & quote */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <FaRocket className="text-cyan-400 text-sm" />
              <span className="font-orbitron font-bold gradient-text-2 tracking-wider">PUTRA.DEV</span>
            </div>
            <p className="font-light italic text-slate-600 text-sm max-w-xs">
              "The universe is under no obligation to make sense to you." – Neil deGrasse Tyson
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub />, href: personalInfo.github, color: "#f0f4ff" },
              { icon: <FaLinkedin />, href: personalInfo.linkedin, color: "#0077b5" },
              { icon: <FaInstagram />, href: personalInfo.instagram, color: "#e1306c" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center border border-slate-700/50 hover:border-slate-500/50 transition-all"
                style={{ color: s.color }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-600 text-sm font-rajdhani">
            <p>© {year} <span className="text-slate-400">{personalInfo.name}</span></p>
            <p className="flex items-center gap-1 justify-center mt-0.5">
              Made with <FaHeart className="text-pink-500 text-xs mx-0.5" /> & ☕ React.js
            </p>
          </div>
        </div>

        {/* Bottom nav links */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 flex flex-wrap gap-4 justify-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="font-rajdhani text-xs tracking-widest uppercase text-slate-600 hover:text-cyan-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
