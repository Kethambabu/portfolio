import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { JOURNEY_FLOW } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent">
      {/* Section Header */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="eyebrow-text text-cyan-400">08 // JOURNEY</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="heading-clamp font-extrabold tracking-tight text-white max-w-3xl text-shadow-cinematic"
        >
          AI Learning & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Project Journey</span>
        </motion.h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl text-shadow-subtle">
          A visual trajectory of technical domains and architectures explored through continuous learning and hands-on project implementation.
        </p>
      </div>

      {/* Animated Flow Chips Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-6 sm:p-8 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10"
      >
        <div className="flex items-center gap-2 mb-8 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span>Technical Progression Path</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {JOURNEY_FLOW.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="px-5 py-3 rounded-2xl bg-black/40 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {step}
                </span>
              </motion.div>

              {index < JOURNEY_FLOW.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 + 0.03 }}
                  className="text-cyan-400 shrink-0"
                >
                  <ArrowRight className="w-4 h-4 hidden sm:block text-cyan-400" />
                  <Sparkles className="w-3.5 h-3.5 sm:hidden text-cyan-500/50" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
