import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent">
      {/* Section Header */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="eyebrow-text text-cyan-400">02 // EDUCATION</span>
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
          Academic <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Foundation</span>
        </motion.h2>
      </div>

      {/* Education Timeline */}
      <div className="relative border-l border-cyan-500/30 pl-6 md:pl-10 space-y-8 ml-2 md:ml-4">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300" />

            <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                    <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 font-medium flex items-center gap-2 mt-1 text-sm">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/60 border border-amber-500/30 text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                    {edu.scoreLabel}: {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
