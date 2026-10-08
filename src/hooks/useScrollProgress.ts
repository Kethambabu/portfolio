import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetProgressRef.current = Math.min(1, Math.max(0, scrollTop / maxScroll));
    };

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);

      calculateProgress();

      // Smooth LERP frame interpolation toward target scroll position
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.12;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }
      setScrollProgress(currentProgressRef.current);

      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', calculateProgress);
      lenis.destroy();
    };
  }, []);

  return scrollProgress;
}

