import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

interface PreloaderProps {
  progress: number;
  isReady: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress, isReady }) => {
  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] text-white select-none px-6"
        >
          {/* Ambient Background Glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none translate-y-20" />

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm w-full text-center">
            {/* Logo Badge */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            >
              <Cpu className="w-8 h-8 text-cyan-400" />
            </motion.div>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                <span>KETHAM BABU NEELAM</span>
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </h2>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                Initializing AI Portfolio Engine
              </p>
            </div>

            {/* Progress Track */}
            <div className="w-full space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400 px-1">
                <span>Loading Image Frames</span>
                <span className="text-cyan-400 font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
