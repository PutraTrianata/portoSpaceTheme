// src/components/StarField.jsx
// Komponen animasi bintang-bintang di background
import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];
    let shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.8 + 0.2,
          opacity: Math.random(),
          speed: Math.random() * 0.008 + 0.002,
          color: Math.random() > 0.8
            ? `hsl(${180 + Math.random() * 80}, 80%, 80%)` // cyan-ish
            : Math.random() > 0.5
              ? `hsl(${270 + Math.random() * 40}, 70%, 80%)` // purple-ish
              : "white",
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 2);
      const star = {
        x: side === 0 ? Math.random() * canvas.width : 0,
        y: side === 0 ? 0 : Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        opacity: 1,
        angle: (Math.random() * 20 + 25) * (Math.PI / 180),
      };
      shootingStars.push(star);
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset);
        const alpha = 0.4 + (twinkle + 1) * 0.3;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.r > 1.2 ? 4 : 0;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Shooting stars
      if (frame % 180 === 0 && Math.random() > 0.4) {
        createShootingStar();
      }

      shootingStars = shootingStars.filter((s) => s.opacity > 0);
      shootingStars.forEach((s) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(0.4, "rgba(6,182,212,0.5)");
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.stroke();
        ctx.restore();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createStars();
    draw();

    const handleResize = () => {
      resize();
      createStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default StarField;
