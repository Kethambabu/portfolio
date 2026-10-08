import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

type ScrollListener = (progress: number) => void;
const listeners = new Set<ScrollListener>();

let currentProgress = 0;

export function getScrollProgress(): number {
  return currentProgress;
}

export function subscribeScrollProgress(listener: ScrollListener): () => void {
  listeners.add(listener);
  listener(currentProgress);
  return () => {
    listeners.delete(listener);
  };
}

export function useScrollProgress() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId: number;

    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      if (Math.abs(currentProgress - progress) > 0.00001) {
        currentProgress = progress;
        listeners.forEach((fn) => fn(currentProgress));
      }
    };

    lenis.on('scroll', () => {
      calculateProgress();
    });

    function raf(time: number) {
      lenis.raf(time);
      calculateProgress();
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    calculateProgress();

    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', calculateProgress);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return currentProgress;
}
