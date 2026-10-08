const TOTAL_FRAMES = 300;
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const progressFill = document.getElementById('progress-fill');
const loaderPercent = document.getElementById('loader-percent');

const images = new Array(TOTAL_FRAMES);
let loadedCount = 0;
let targetFrame = 0;
let currentFrame = 0;
let isLoaded = false;
const LERP_FACTOR = 0.09; // Controls scroll smoothness

function getFrameUrl(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `./portfolio_img/ezgif-frame-${frameNum}.jpg`;
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  if (isLoaded) {
    render();
  }
}

function drawImageScaled(img) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const hRatio = canvasWidth / img.naturalWidth;
  const vRatio = canvasHeight / img.naturalHeight;
  // Fit image while preserving aspect ratio (cover mode for full screen immersive animation)
  const ratio = Math.max(hRatio, vRatio);

  const centerShiftX = (canvasWidth - img.naturalWidth * ratio) / 2;
  const centerShiftY = (canvasHeight - img.naturalHeight * ratio) / 2;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(
    img,
    0,
    0,
    img.naturalWidth,
    img.naturalHeight,
    centerShiftX,
    centerShiftY,
    img.naturalWidth * ratio,
    img.naturalHeight * ratio
  );
}

function render() {
  const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
  const img = images[frameIndex];
  if (img) {
    drawImageScaled(img);
  }
}

function updateTargetFrame() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0;
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
}

function animate() {
  if (isLoaded) {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.001) {
      currentFrame += diff * LERP_FACTOR;
    } else {
      currentFrame = targetFrame;
    }
    render();
  }
  requestAnimationFrame(animate);
}

function preloadImages() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFrameUrl(i);

    img.onload = () => {
      loadedCount++;
      const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      progressFill.style.width = `${percent}%`;
      loaderPercent.innerText = `${percent}%`;

      if (loadedCount === TOTAL_FRAMES) {
        onAllLoaded();
      }
    };

    img.onerror = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        onAllLoaded();
      }
    };

    images[i] = img;
  }
}

function onAllLoaded() {
  isLoaded = true;
  loader.classList.add('hidden');
  updateTargetFrame();
  render();
}

// Event Listeners
window.addEventListener('resize', resizeCanvas);
window.addEventListener('scroll', updateTargetFrame, { passive: true });

// Initialize
resizeCanvas();
preloadImages();
requestAnimationFrame(animate);
