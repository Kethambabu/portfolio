import React from 'react';
import { useImageSequence } from './hooks/useImageSequence';
import { useScrollProgress } from './hooks/useScrollProgress';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { TechSkills } from './components/TechSkills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Certifications } from './components/Certifications';
import { Timeline } from './components/Timeline';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Outro } from './components/Outro';
import { ImageSequenceCanvas } from './components/ImageSequenceCanvas';

export const App: React.FC = () => {
  const { progressPercent, isLoaded, drawFrame, totalFrames } = useImageSequence();
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-[#050508] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Global Preloader */}
      <Preloader progress={progressPercent} isReady={isLoaded} />

      {/* Floating Navigation */}
      <Navbar />

      {/* GLOBAL PERSISTENT CINEMATIC STORYTELLING CANVAS BACKDROP */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-screen overflow-hidden">
        <ImageSequenceCanvas
          progress={scrollProgress}
          drawFrame={drawFrame}
          totalFrames={totalFrames}
          overlayOpacity={0.25}
        />
      </div>

      {/* Main Sections Stack in Exact Sequence */}
      <main className="relative z-10">
        {/* 01 HERO */}
        <Hero />

        {/* 02 ABOUT */}
        <About />

        {/* 03 EDUCATION */}
        <Education />

        {/* 04 TECHNICAL SKILLS */}
        <TechSkills />

        {/* 05 PROJECTS */}
        <Projects drawFrame={drawFrame} />

        {/* 06 RESEARCH & AI SYSTEMS */}
        <Research />

        {/* 07 CERTIFICATIONS */}
        <Certifications />

        {/* 08 AI LEARNING & PROJECT JOURNEY */}
        <Timeline />

        {/* 09 INTERESTS */}
        <Interests />

        {/* 10 CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Outro />
      </main>
    </div>
  );
};

export default App;
