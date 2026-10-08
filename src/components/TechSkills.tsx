import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent min-h-screen flex items-center">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="eyebrow-text text-cyan-400">03 // TECHNICAL SKILLS</span>
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
            Technical Arsenal & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Stack</span>
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 border border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-black/30 border border-white/10 text-slate-400 hover:text-white hover:bg-black/50'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-black/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-cyan-500/40 group-hover:text-cyan-400 transition-colors shrink-0" />
            </motion.div>
          ))}
        </motion.div>

        {/* Full Tech Ecosystem Stream */}
        <div className="space-y-3 p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10">
          <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Full Tech Ecosystem Stream</h4>
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES.flatMap(c => c.skills).map((skillName) => (
              <span
                key={skillName}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200 cursor-default"
              >
                {skillName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
