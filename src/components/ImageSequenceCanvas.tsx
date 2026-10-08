import React, { useEffect, useRef } from 'react';
import { subscribeScrollProgress } from '../hooks/useScrollProgress';

interface ImageSequenceCanvasProps {
  progress?: number;
  drawFrame: (canvas: HTMLCanvasElement | null, frameIndex: number) => void;
  totalFrames: number;
  className?: string;
  overlayOpacity?: number;
}

export const ImageSequenceCanvas: React.FC<ImageSequenceCanvasProps> = ({
  progress,
  drawFrame,
  totalFrames,
  className = "",
  overlayOpacity = 0.25
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isDirtyRef = useRef<boolean>(true);

  // Synchronize scroll progress (either from explicit prop or subscription)
  useEffect(() => {
    if (typeof progress === 'number') {
      targetFrameRef.current = progress * (totalFrames - 1);
      isDirtyRef.current = true;
      return;
    }

    const unsubscribe = subscribeScrollProgress((p) => {
      targetFrameRef.current = p * (totalFrames - 1);
      isDirtyRef.current = true;
    });

    return () => {
      unsubscribe();
    };
  }, [progress, totalFrames]);

  // Buttery-smooth hardware accelerated frame render loop
  useEffect(() => {
    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001 || isDirtyRef.current) {
        // Smooth sub-frame linear interpolation for fluid motion
        currentFrameRef.current += diff * 0.22;
        drawFrame(canvasRef.current, currentFrameRef.current);
        isDirtyRef.current = false;
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);

    const handleResize = () => {
      isDirtyRef.current = true;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [drawFrame]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block transform-gpu"
      />
      {/* Light subtle overlay to maintain text contrast while keeping portrait bright and 80-90% visible */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050508]/20 via-[#050508]/30 to-[#050508]/50"
        style={{ opacity: overlayOpacity }}
      />
      {/* Subtle vignette edge gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(5,5,8,0.4)_100%)]" />
    </div>
  );
};
