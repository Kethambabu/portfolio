import React, { useEffect, useRef } from 'react';

interface ImageSequenceCanvasProps {
  progress: number; // 0 to 1
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

  useEffect(() => {
    const frameIndex = progress * (totalFrames - 1);
    drawFrame(canvasRef.current, frameIndex);
  }, [progress, drawFrame, totalFrames]);

  useEffect(() => {
    const handleResize = () => {
      const frameIndex = progress * (totalFrames - 1);
      drawFrame(canvasRef.current, frameIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [progress, drawFrame, totalFrames]);

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


