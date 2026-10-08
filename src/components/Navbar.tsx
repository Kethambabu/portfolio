import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section intersection detection
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between px-5 ${
          isScrolled
            ? 'py-2.5 bg-[#0a0b12]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full max-w-6xl'
            : 'py-3.5 bg-transparent border border-white/5 w-full max-w-7xl'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2.5 text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-sm font-mono text-white group-hover:text-cyan-400 transition-colors">
            KETHAM BABU<span className="text-cyan-400">.AI</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* GitHub Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-4 top-20 z-40 bg-[#070811]/95 border border-cyan-500/30 backdrop-blur-3xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,240,255,0.15)] xl:hidden pointer-events-auto flex flex-col space-y-3"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10 px-1">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Navigation Menu</span>
            <span className="text-[10px] font-mono text-slate-400">SELECT SECTION</span>
          </div>

          <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto py-1 pr-1">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-semibold py-2.5 px-4 rounded-2xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400/70 font-bold">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </span>
                  <span className={`text-xs font-mono ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>#</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-cyan-500/25 transition-all"
            >
              <span>View Official Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

