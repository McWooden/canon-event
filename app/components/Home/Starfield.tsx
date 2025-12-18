"use client";

import { useEffect, useRef } from "react";

// Type guard buat canvas
function isCanvas(element: HTMLCanvasElement | null): element is HTMLCanvasElement {
  return element !== null;
}

// Type guard buat context
function isCanvasRenderingContext2D(
  ctx: CanvasRenderingContext2D | null
): ctx is CanvasRenderingContext2D {
  return ctx !== null;
}

// Helper buat parse hex color ke rgb array
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [255, 255, 255]; // Default white kalau invalid
}

interface StarfieldProps {
  starColor?: string; // Hex color
}

export default function Starfield({ starColor = "#3435F3" }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!isCanvas(canvas)) return; // Early return kalau null

    const ctx = canvas.getContext("2d");
    if (!isCanvasRenderingContext2D(ctx)) return; // Early return kalau null

    let stars: {
      angle: number;
      radius: number;
      speed: number;
      size: number;
    }[] = [];
    let shootingStars: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }[] = [];

    const [r, g, b] = hexToRgb(starColor); // Parse warna sekali di awal

    // Inisialisasi bintang (sama seperti sebelumnya)
    function initStars() {
      const numStars = 360;
      stars = Array.from({ length: numStars }, () => ({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * Math.sqrt((canvas?.width ?? 0) ** 2 + (canvas?.height ?? 0) ** 2),
        speed: Math.random() * (0.0003 - 0.00015) + 0.00015,
        size: Math.random() * (1.2 - 0.5) + 0.5,
      }));
    }

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Loop animasi (update di sini biar ctx & canvas typed)
    function animate() {
      if (!ctx || !canvas) return;
      requestAnimationFrame(animate);

      // Clear full transparent – no trails, pure overlay
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Update bintang
      stars.forEach((star) => {
        star.angle += star.speed;

        const x = centerX + star.radius * Math.cos(star.angle);
        const y = centerY + star.radius * Math.sin(star.angle);

        // Wrap around (sama)
        if (x < 0 || x > canvas.width) star.angle = Math.PI - star.angle;
        if (y < 0 || y > canvas.height) star.angle = Math.PI * 2 - star.angle;

        const flicker = 0.4 + Math.abs(Math.sin(Date.now() * 0.0015 + star.angle)) * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, star.size * flicker, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${flicker * 0.8})`;
        ctx.fill();
      });

      // Spawn meteor (sama, probabilitas 0.01)
      if (shootingStars.length === 0 && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          vx: 3 + Math.random() * 2,
          vy: 1 + Math.random() * 1.5,
          life: 35,
        });
      }

      // Update meteor (pake warna sama dengan stars)
      shootingStars.forEach((s, index) => {
        if (s.life <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.vx * 35,
          s.y - s.vy * 35
        );
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${s.life / 35})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 35, s.y - s.vy * 35);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life--;
      });
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starColor]); // Re-run effect kalau starColor berubah

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}  // Explicit transparent background
    />
  );
}