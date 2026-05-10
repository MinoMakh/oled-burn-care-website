import React, { useEffect, useRef, useCallback } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
    ctx.fillRect(0, 0, width, height);

    const blockSize = 4;
    const numPixels = Math.floor((width * height) / (blockSize * blockSize) * 0.008);

    for (let i = 0; i < numPixels; i++) {
      const x = Math.floor(Math.random() * (width / blockSize)) * blockSize;
      const y = Math.floor(Math.random() * (height / blockSize)) * blockSize;
      const r = Math.random() > 0.6 ? 205 : Math.floor(Math.random() * 60);
      const g = Math.random() > 0.6 ? 255 : Math.floor(Math.random() * 60);
      const b = Math.random() > 0.8 ? Math.floor(Math.random() * 40) : 0;
      const a = Math.random() * 0.4 + 0.1;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.fillRect(x, y, blockSize, blockSize);
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
};

export default HeroCanvas;