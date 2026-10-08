import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent">
      {/* Section Header */}
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="eyebrow-text text-cyan-400">07 // CERTIFICATIONS</span>
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
          Verified <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Credentials</span>
        </motion.h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            className="p-6 sm:p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {cert.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                {cert.title}
              </h3>

              <p className="text-slate-300 font-medium flex items-center gap-2 mb-4 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                {cert.issuer}
              </p>
            </div>

            {cert.score && (
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Performance Score</span>
                <span className="text-xs font-bold font-mono text-amber-400 px-2.5 py-1 rounded bg-amber-950/50 border border-amber-500/30">
                  {cert.score}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
