import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Building2, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-12">
          {/* Eyebrow with Expanding Accent Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="eyebrow-text text-cyan-400">01 // ABOUT ME</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"
            />
          </motion.div>

          {/* Main Heading - Blur & Layered Reveal */}
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="heading-clamp font-extrabold tracking-tight text-white max-w-4xl text-shadow-cinematic"
          >
            Building Intelligent Systems Across{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI, ML & Generative AI
            </span>
          </motion.h2>
        </div>

        {/* Content Layout - Open transparent structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Resume Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 local-radial-shadow p-6 sm:p-8 rounded-3xl space-y-6 text-shadow-subtle"
          >
            <h3 className="text-lg font-mono font-bold text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Background & Mission</span>
            </h3>

            {PERSONAL_INFO.aboutParagraphs.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-slate-200 text-base md:text-lg leading-relaxed font-light"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Quick Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 p-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 space-y-4"
          >
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span>Key Profile Info</span>
            </h4>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Institution</span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  IIIT Nuzvid
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Degree</span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  B.Tech Computer Science
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Current CGPA</span>
                <p className="text-sm font-bold text-amber-400 flex items-center gap-1.5 mt-0.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  8.57 CGPA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
