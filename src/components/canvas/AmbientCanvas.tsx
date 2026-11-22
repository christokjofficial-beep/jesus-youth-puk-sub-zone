import React, { useEffect, useRef } from 'react';
import { DepthMode } from '../../types/theme';
import styles from './AmbientCanvas.module.css';

interface Star {
  x: number;
  y: number;
  r: number;
  s: number;
}

interface BubbleParticle {
  x: number;
  y: number;
  r: number;
  v: number;
}

interface AmbientCanvasProps {
  depth: DepthMode;
}

export const AmbientCanvas: React.FC<AmbientCanvasProps> = ({ depth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let bubbles: BubbleParticle[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      stars = Array.from({ length: 130 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        s: Math.random() * 2 + 0.5
      }));

      bubbles = Array.from({ length: 40 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 10 + 3,
        v: Math.random() * 0.6 + 0.2
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    let starAlpha = 1;
    let bubbleAlpha = 0;
    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const targetStarAlpha = depth === 'space' ? 1 : 0;
      const targetBubbleAlpha = depth === 'deep' ? 1 : 0;

      starAlpha += (targetStarAlpha - starAlpha) * 0.05;
      bubbleAlpha += (targetBubbleAlpha - bubbleAlpha) * 0.05;

      // Draw starry celestial particles
      if (starAlpha > 0.01) {
        ctx.fillStyle = '#ffffff';
        stars.forEach((star) => {
          const twinkle = Math.abs(Math.sin((time / 1000) * star.s + star.x));
          ctx.globalAlpha = starAlpha * (0.4 + 0.6 * twinkle);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw underwater bubbles
      if (bubbleAlpha > 0.01) {
        bubbles.forEach((b) => {
          b.y -= b.v;
          b.x += Math.sin(time / 900 + b.y / 60) * 0.3;

          if (b.y < -20) {
            b.y = height + 20;
            b.x = Math.random() * width;
          }

          // Bubble stroke
          ctx.globalAlpha = bubbleAlpha * 0.45;
          ctx.strokeStyle = '#bfe6ff';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.stroke();

          // Bubble specular reflection highlight
          ctx.globalAlpha = bubbleAlpha * 0.5;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.18, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [depth]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
};
