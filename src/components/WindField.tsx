"use client";

import { useEffect, useRef } from "react";

// Particles advected through a smooth, slowly evolving 2-D flow field.
// The pointer adds a gentle vortex so visitors can stir the "atmosphere".
export function WindField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    const pointer = { x: -1e4, y: -1e4 };

    type P = { x: number; y: number; age: number; life: number };
    let particles: P[] = [];

    const spawn = (): P => ({
      x: Math.random() * w,
      y: Math.random() * h,
      age: 0,
      life: 80 + Math.random() * 160,
    });

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(1400, (w * h) / 900));
      particles = Array.from({ length: n }, spawn);
    };

    const velocity = (x: number, y: number) => {
      const s = 0.0028;
      const a =
        Math.sin(x * s + t * 0.25) * 1.3 +
        Math.cos(y * s * 1.7 - t * 0.18) * 1.1 +
        Math.sin((x + y) * s * 0.6 + t * 0.1);
      let u = Math.cos(a) * 1.1 + 0.6; // mean westerly drift
      let v = Math.sin(a) * 0.9;
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 40000) {
        const k = (1 - d2 / 40000) * 3.2;
        u += (-dy / Math.sqrt(d2 + 1)) * k;
        v += (dx / Math.sqrt(d2 + 1)) * k;
      }
      return { u, v };
    };

    const color = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--stream").trim() ||
      "rgba(59,130,246,0.5)";

    let stroke = color();
    const themeObserver = new MutationObserver(() => {
      stroke = color();
      ctx.clearRect(0, 0, w, h);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const frame = () => {
      t += 0.016;
      // Fade previous frame to leave short trails.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const { u, v } = velocity(p.x, p.y);
        const nx = p.x + u;
        const ny = p.y + v;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        p.x = nx;
        p.y = ny;
        p.age++;
        if (p.age > p.life || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          particles[i] = spawn();
        }
      }
      ctx.stroke();
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -1e4;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    if (reduced) {
      // Draw a single still frame of streamlines instead of animating.
      for (let i = 0; i < 60; i++) {
        ctx.globalAlpha = 0.5;
        frame();
        cancelAnimationFrame(raf);
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
