import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Globe, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Outro: React.FC = () => {
  return (
    <footer id="outro" className="relative w-full min-h-[75vh] flex flex-col items-center justify-center py-24 px-4 sm:px-6 text-center text-white bg-transparent z-10">
      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Subtle Local Radial Shadow for Sharp Contrast without black cards */}
        <div className="local-radial-shadow p-6 sm:p-12 rounded-3xl space-y-8">
          {/* Eyebrow Label with Animated Growing Accent Line */}
          <div className="flex items-center justify-center gap-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-transparent to-cyan-400"
            />
            <span className="eyebrow-text text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FINAL SYSTEM CHECKPOINT
            </span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-gradient-to-l from-transparent to-cyan-400"
            />
          </div>

          {/* Split Line Main Heading */}
          <div className="space-y-1">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase text-shadow-cinematic"
            >
              THANK YOU FOR
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase text-shadow-cinematic bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
            >
              EXPLORING.
            </motion.h2>
          </div>

          {/* Subheading & Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-3 pt-2"
          >
            <p className="text-base sm:text-xl font-light text-slate-200 text-shadow-subtle">
              Let's Build Intelligent Systems Together.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 tracking-wide">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono text-slate-300 font-medium tracking-wider uppercase">
              AI / ML &nbsp;•&nbsp; Generative AI &nbsp;•&nbsp; Multi-Agent Systems
            </p>
          </motion.div>

          {/* Clean Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors duration-300 hover:scale-105"
            >
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors duration-300 hover:scale-105"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        {/* Minimal Copyright Line */}
        <div className="pt-4 text-xs font-mono text-slate-500">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
