// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { navLinks } from "../data/portfolioData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-cyan-900/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNav("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <FaRocket className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors" />
            <div className="absolute inset-0 blur-md bg-cyan-400/30 group-hover:bg-cyan-400/50 transition-all rounded-full" />
          </div>
          <span className="font-orbitron font-bold text-lg gradient-text-2 tracking-wider">
            PUTRA<span className="text-cyan-400">.</span>DEV
          </span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 font-rajdhani font-semibold text-sm tracking-widest uppercase transition-colors ${
                  isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                )}
              </motion.button>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav("#contact")}
            className="ml-3 px-5 py-2 rounded-full font-rajdhani font-bold text-sm tracking-widest uppercase
              bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40
              text-cyan-300 hover:from-cyan-500/30 hover:to-purple-600/30 hover:border-cyan-400/60
              hover:text-white transition-all glow-cyan"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile burger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400 text-2xl hover:text-white transition-colors"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-cyan-900/30 overflow-hidden"
          >
            <div className="flex flex-col py-3 px-6 gap-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <motion.button
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-3 rounded-lg font-rajdhani font-semibold text-sm tracking-widest uppercase transition-all ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
