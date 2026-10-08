import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, FileText, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, HERO_TAGS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const nameWords = PERSONAL_INFO.name.split(' ');

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 text-center max-w-5xl mx-auto">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.25)]"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI / ML & GENERATIVE AI SPECIALIST</span>
      </motion.div>

      {/* Main Name Header - Word-by-Word Cinematic Reveal */}
      <div className="overflow-hidden mb-4 max-w-full">
        <motion.h1 className="text-3xl xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight sm:leading-none text-shadow-cinematic flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
          {nameWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.3 + idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={`inline-block ${
                idx === nameWords.length - 1
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Primary Positioning with Selective Glass Accent Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-base font-mono mb-6 max-w-3xl"
      >
        <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold backdrop-blur-sm">
          AI / ML Engineer
        </span>
        <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold backdrop-blur-sm">
          Generative AI
        </span>
        <span className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-white font-semibold backdrop-blur-sm">
          Multi-Agent Systems
        </span>
        <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-slate-200 font-medium backdrop-blur-sm">
          Deep Learning
        </span>
      </motion.div>

      {/* Hero Summary Paragraphs inside stylish dark glass card */}
      <motion.div
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl font-light leading-relaxed mb-8 space-y-2 bg-black/40 border border-white/10 backdrop-blur-md p-5 sm:p-7 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <p className="font-semibold text-white text-sm sm:text-lg text-cyan-300">{PERSONAL_INFO.heroSummary.line1}</p>
        <p className="text-slate-200">{PERSONAL_INFO.heroSummary.line2}</p>
        <p className="text-slate-400 text-xs sm:text-sm font-mono pt-1">{PERSONAL_INFO.heroSummary.line3}</p>
      </motion.div>

      {/* Hero Tech Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 max-w-2xl"
      >
        {HERO_TAGS.map((tag, idx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.85 + idx * 0.05 }}
            className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/50 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono backdrop-blur-sm hover:border-cyan-400 hover:text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-16 w-full max-w-md sm:max-w-none"
      >
        <a
          href="#projects"
          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <span>Explore Projects</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href={PERSONAL_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
        >
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>View Resume</span>
        </a>

        <a
          href="#contact"
          className="px-7 py-3.5 rounded-full bg-black/40 border border-white/15 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
        >
          <Mail className="w-4 h-4 text-cyan-400" />
          <span>Contact Me</span>
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-slate-400 text-xs font-mono"
      >
        <span>SCROLL TO TRANSFORM</span>
        <ArrowDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  );
};
