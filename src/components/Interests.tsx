import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Target } from 'lucide-react';
import { CORE_INTERESTS } from '../data/portfolioData';

export const Interests: React.FC = () => {
  const icons = [Sparkles, Brain, Cpu, Target];

  return (
    <section id="interests" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent">
      {/* Section Header */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="eyebrow-text text-cyan-400">09 // INTERESTS</span>
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
          Core <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Focus & Technical Passions</span>
        </motion.h2>
      </div>

      {/* Large Floating Animated Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_INTERESTS.map((interest, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                <IconComponent className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {interest}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
