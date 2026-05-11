// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaWhatsapp, FaGithub, FaInstagram, FaLinkedin,
  FaPaperPlane, FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

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

const socialLinks = [
  { icon: <FaEnvelope />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#06b6d4" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: personalInfo.whatsapp, href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`, color: "#25d366" },
  { icon: <FaGithub />, label: "GitHub", value: "@PutraTrianata", href: personalInfo.github, color: "#f0f4ff" },
  { icon: <FaInstagram />, label: "Instagram", value: "@putratrn_", href: personalInfo.instagram, color: "#e1306c" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "Putra Trianata", href: personalInfo.linkedin, color: "#0077b5" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!form.email.trim()) e.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.message.trim()) e.message = "Pesan wajib diisi";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    // Simulate sending
    setTimeout(() => { setLoading(false); setSent(true); setForm({ name: "", email: "", subject: "", message: "" }); }, 1800);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl glass font-rajdhani text-sm text-white placeholder-slate-600
    border ${errors[field] ? "border-red-500/50" : "border-slate-700/60 focus:border-cyan-500/60"}
    outline-none focus:ring-1 ${errors[field] ? "focus:ring-red-500/30" : "focus:ring-cyan-500/20"}
    bg-slate-900/40 transition-all`;

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="Get In Touch" title="Contact Me" subtitle="Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left – Social links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass-purple rounded-2xl p-6 border border-purple-500/20 mb-6">
              <h3 className="font-orbitron font-bold text-white mb-2">Mari Terhubung! 🚀</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Saya selalu terbuka untuk kesempatan baru, proyek freelance, atau sekadar ngobrol tentang teknologi dan desain.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-4 glass rounded-2xl p-4 border border-slate-700/50 hover:border-slate-500/50 group transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: `${link.color}18`, border: `1px solid ${link.color}35`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-rajdhani font-bold text-xs tracking-widest uppercase text-slate-500">{link.label}</p>
                    <p className="font-rajdhani text-sm text-white group-hover:text-slate-200 transition-colors">{link.value}</p>
                  </div>
                  <span className="ml-auto text-slate-700 group-hover:text-cyan-400 transition-colors font-rajdhani text-lg">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right – Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full glass rounded-2xl border border-cyan-500/30 flex flex-col items-center justify-center gap-4 p-10 text-center"
              >
                <FaCheckCircle className="text-5xl text-cyan-400 pulse-glow" />
                <h3 className="font-orbitron font-bold text-xl text-white">Pesan Terkirim! 🎉</h3>
                <p className="text-slate-400 text-sm">Terima kasih! Saya akan membalas pesan kamu secepat mungkin.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 font-rajdhani text-sm text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Kirim pesan lain
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-slate-700/50 space-y-4">
                <h3 className="font-orbitron font-bold text-white mb-2">Kirim Pesan ✉️</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      className={inputCls("name")}
                      placeholder="Nama Kamu"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      className={inputCls("email")}
                      placeholder="Email Kamu"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.email}</p>}
                  </div>
                </div>

                <input
                  className={inputCls("subject")}
                  placeholder="Subjek (opsional)"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />

                <div>
                  <textarea
                    className={`${inputCls("message")} resize-none`}
                    rows={5}
                    placeholder="Tulis pesanmu di sini..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-rajdhani">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-rajdhani font-bold text-sm tracking-widest uppercase
                    bg-gradient-to-r from-cyan-500 to-purple-600 text-white
                    shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-60 transition-all"
                >
                  {loading ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block">⟳</motion.span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
