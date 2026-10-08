import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Sparkles, Network, ArrowRight } from 'lucide-react';
import { AI_SPECIALIZATIONS } from '../data/portfolioData';

export const Research: React.FC = () => {
  const researchFlow = [
    { source: "GANs", arrow: "↓", target: "Generative Models" },
    { source: "LLMs", arrow: "↓", target: "Multi-Agent Systems" },
    { source: "RAG", arrow: "↓", target: "Grounded AI Systems" },
    { source: "Evaluation", arrow: "↓", target: "Reproducible AI" }
  ];

  return (
    <section id="research" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent">
      {/* Section Header */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="eyebrow-text text-cyan-400">05 & 06 // RESEARCH & AI SYSTEMS</span>
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
          Exploring the Frontier of <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Intelligent Systems</span>
        </motion.h2>
      </div>

      {/* Demonstrated Research Connections Flow */}
      <motion.div
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-8 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 mb-12"
      >
        <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Microscope className="w-4 h-4 text-cyan-400" />
          <span>Core Focus & Applied Foundations</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchFlow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 hover:border-cyan-400/50 transition-all group"
            >
              <span className="text-cyan-300 font-bold font-mono text-sm">{item.source}</span>
              <span className="text-cyan-400 font-bold text-lg group-hover:translate-y-1 transition-transform">{item.arrow}</span>
              <span className="text-slate-200 text-xs font-medium">{item.target}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Systems & Specializations Animated Nodes Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono font-bold text-white flex items-center gap-2">
          <Network className="w-5 h-5 text-cyan-400" />
          <span>Specialized AI Architectures</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_SPECIALIZATIONS.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {spec.title}
                </h4>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {spec.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
