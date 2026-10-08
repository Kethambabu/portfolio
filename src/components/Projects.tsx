import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, Layers, Award } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  drawFrame?: (canvas: HTMLCanvasElement, frameIndex: number) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);

  return (
    <section id="projects" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="eyebrow-text text-cyan-400">04 // SELECTED PROJECTS</span>
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
            Production-Grade <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Systems & Research</span>
          </motion.h2>
        </div>

        {/* Project Selection Tabs */}
        <div className="flex overflow-x-auto pb-3 mb-8 gap-2.5 sm:gap-3 flex-nowrap sm:flex-wrap max-w-full">
          {PROJECTS.map((proj) => {
            const isActive = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-black/40 border border-white/10 text-slate-400 hover:text-white hover:bg-black/60'
                }`}
              >
                <span className="font-mono text-cyan-400 font-bold">{proj.code}</span>
                <span className="whitespace-nowrap">{proj.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card */}
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-8 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10"
        >
          {/* Left Main Information */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                {activeProject.subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-shadow-subtle">
              {activeProject.name}
            </h3>

            <p className="text-slate-200 text-base leading-relaxed font-light text-shadow-subtle">
              {activeProject.description}
            </p>

            {/* Key Work Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Key Work & Implementation</span>
              </h4>
              <div className="space-y-2">
                {activeProject.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-cyan-500/30 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-relaxed font-light">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Flow */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture Flow</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.flow.map((step, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Evaluation Metrics */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold">Evaluated Performance Metrics</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {activeProject.metricsEvaluated.map((metric, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {activeProject.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            {(activeProject.githubUrl || activeProject.demoUrl) && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Selector Column */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase">Select Project</span>
            <div className="flex flex-col gap-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className={`p-4 rounded-2xl border text-left text-xs font-medium transition-all ${
                    activeProject.id === p.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-black/30 border-white/10 text-slate-400 hover:text-white hover:bg-black/50'
                  }`}
                >
                  <div className="font-mono text-cyan-400 text-[10px] font-bold">{p.code}</div>
                  <div className="font-semibold text-white mt-1">{p.name}</div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
