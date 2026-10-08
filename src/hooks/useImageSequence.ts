import { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 300;

export function useImageSequence() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));

  useEffect(() => {
    let isCancelled = false;
    let count = 0;

    const getFrameUrl = (index: number) => {
      const frameNum = String(index + 1).padStart(3, '0');
      const baseUrl = import.meta.env.BASE_URL || '/';
      const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
      return `${cleanBase}portfolio_img/ezgif-frame-${frameNum}.jpg`;
    };

    const loadFrame = (index: number) => {
      return new Promise<void>((resolve) => {
        if (imagesRef.current[index]) {
          resolve();
          return;
        }
        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            count++;
            setLoadedCount(count);
            // Mark loaded as soon as first 25 frames are ready for instant display
            if (count >= 25 && !isLoaded) {
              setIsLoaded(true);
            }
          }
          resolve();
        };

        img.onerror = () => {
          if (!isCancelled) {
            count++;
            setLoadedCount(count);
            if (count >= 25 && !isLoaded) {
              setIsLoaded(true);
            }
          }
          resolve();
        };
      });
    };

    const startPreloading = async () => {
      // Step 1: Immediately load the first 25 frames for immediate top-of-page rendering
      const initialBatch = Array.from({ length: 25 }, (_, i) => i);
      await Promise.all(initialBatch.map(idx => loadFrame(idx)));

      // Step 2: Sample load key frames across the whole timeline
      const sampleIndices = Array.from({ length: 20 }, (_, i) => Math.floor((i * (TOTAL_FRAMES - 1)) / 20));
      await Promise.all(sampleIndices.map(idx => loadFrame(idx)));

      setIsLoaded(true);

      // Step 3: Progressive background loading of all remaining frames
      for (let i = 0; i < TOTAL_FRAMES; i += 5) {
        if (isCancelled) break;
        const chunk = [];
        for (let j = 0; j < 5 && (i + j) < TOTAL_FRAMES; j++) {
          chunk.push(loadFrame(i + j));
        }
        await Promise.all(chunk);
      }
    };

    startPreloading();

    return () => {
      isCancelled = true;
    };
  }, []);

  const drawFrame = useCallback((
    canvas: HTMLCanvasElement | null,
    frameIndex: number
  ) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const boundedIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndex)));
    let img = imagesRef.current[boundedIndex];

    // Fallback: if target frame isn't loaded yet, pick nearest loaded image
    if (!img || !img.complete) {
      for (let offset = 1; offset < 30; offset++) {
        const prev = imagesRef.current[boundedIndex - offset];
        const next = imagesRef.current[boundedIndex + offset];
        if (prev && prev.complete) { img = prev; break; }
        if (next && next.complete) { img = next; break; }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const containerWidth = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    const containerHeight = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

    const targetWidth = Math.round(containerWidth * dpr);
    const targetHeight = Math.round(containerHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sw = img.naturalWidth;
    const sh = img.naturalHeight;
    const cw = canvas.width;
    const ch = canvas.height;

    // Scale calculation to cover canvas aspect ratio perfectly
    const scale = Math.max(cw / sw, ch / sh);
    const renderW = sw * scale;
    const renderH = sh * scale;

    const centerShiftX = (cw - renderW) / 2;

    // Responsive Focal positioning math:
    // On mobile (< 768px), keep the portrait subject higher so it aligns beautifully with hero title
    const isMobile = containerWidth < 768;
    const faceFocalYRatio = 0.28;
    const canvasTargetYRatio = isMobile ? 0.28 : 0.34;

    let centerShiftY = (ch * canvasTargetYRatio) - (renderH * faceFocalYRatio);

    // Clamp centerShiftY to ensure the image completely covers the canvas without empty space
    const minY = ch - renderH;
    const maxY = 0;
    centerShiftY = Math.min(maxY, Math.max(minY, centerShiftY));

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      img,
      0, 0, sw, sh,
      centerShiftX, centerShiftY, renderW, renderH
    );
  }, []);

  const progressPercent = Math.min(100, Math.floor((loadedCount / TOTAL_FRAMES) * 100));

  return {
    totalFrames: TOTAL_FRAMES,
    loadedCount,
    progressPercent,
    isLoaded,
    drawFrame
  };
}

