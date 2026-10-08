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

    const loadFrame = (index: number): Promise<HTMLImageElement | null> => {
      if (imagesRef.current[index]) {
        return Promise.resolve(imagesRef.current[index]);
      }

      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = () => {
          if (!isCancelled) {
            // Asynchronously decode image on background thread
            if ('decode' in img) {
              img.decode().catch(() => {}).finally(() => {
                imagesRef.current[index] = img;
                count++;
                setLoadedCount(count);
                if (count >= 20 && !isLoaded) {
                  setIsLoaded(true);
                }
                resolve(img);
              });
            } else {
              imagesRef.current[index] = img;
              count++;
              setLoadedCount(count);
              if (count >= 20 && !isLoaded) {
                setIsLoaded(true);
              }
              resolve(img);
            }
          } else {
            resolve(null);
          }
        };

        img.onerror = () => {
          if (!isCancelled) {
            count++;
            setLoadedCount(count);
            if (count >= 20 && !isLoaded) {
              setIsLoaded(true);
            }
          }
          resolve(null);
        };
      });
    };

    const loadBatchConcurrently = async (indices: number[], limit = 15) => {
      const queue = [...indices];
      const workers = Array.from({ length: limit }, async () => {
        while (queue.length > 0 && !isCancelled) {
          const idx = queue.shift();
          if (idx !== undefined) {
            await loadFrame(idx);
          }
        }
      });
      await Promise.all(workers);
    };

    const startPreloading = async () => {
      // Step 1: Immediately load initial top frames (0..25) for instant display
      const topFrames = Array.from({ length: 25 }, (_, i) => i);
      await loadBatchConcurrently(topFrames, 15);
      setIsLoaded(true);

      // Step 2: Load keyframes evenly distributed across the entire sequence
      const keyframes: number[] = [];
      for (let i = 25; i < TOTAL_FRAMES; i += 4) {
        keyframes.push(i);
      }
      await loadBatchConcurrently(keyframes, 15);

      // Step 3: Rapidly fill in all remaining intermediate frames
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) {
          remaining.push(i);
        }
      }
      await loadBatchConcurrently(remaining, 15);
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
      for (let offset = 1; offset < 40; offset++) {
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

    const scale = Math.max(cw / sw, ch / sh);
    const renderW = sw * scale;
    const renderH = sh * scale;

    const centerShiftX = (cw - renderW) / 2;

    const isMobile = containerWidth < 768;
    const faceFocalYRatio = 0.28;
    const canvasTargetYRatio = isMobile ? 0.28 : 0.34;

    let centerShiftY = (ch * canvasTargetYRatio) - (renderH * faceFocalYRatio);

    const minY = ch - renderH;
    const maxY = 0;
    centerShiftY = Math.min(maxY, Math.max(minY, centerShiftY));

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium';

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
