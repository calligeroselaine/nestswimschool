"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import Section from "./Section";

export default function PhilosophyBand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const figure = figureRef.current;
    if (!canvas || !figure) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let rafId = 0;
    let onScreen = false;

    const resize = () => {
      width = figure.clientWidth;
      height = figure.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawFrame = (ts: number) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#1B4E68");
      gradient.addColorStop(1, "#3E90B0");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 5; i++) {
        const phase = ts * 0.0001 + i * 2.1;
        const x = (Math.sin(phase) * 0.5 + 0.5) * width;
        const beamGradient = ctx.createLinearGradient(x, -20, x + 40, height);
        beamGradient.addColorStop(0, "rgba(190,231,245,0.18)");
        beamGradient.addColorStop(1, "rgba(190,231,245,0)");
        ctx.fillStyle = beamGradient;
        ctx.beginPath();
        ctx.moveTo(x, -20);
        ctx.lineTo(x + 70, -20);
        ctx.lineTo(x + 10, height);
        ctx.lineTo(x - 60, height);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      if (!reduced && onScreen) rafId = requestAnimationFrame(drawFrame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) {
          if (reduced) {
            drawFrame(0);
          } else {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(drawFrame);
          }
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.05 },
    );
    io.observe(figure);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, []);

  return (
    <Section
      id="philosophy"
      tone="depth"
      innerClassName="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
    >
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
              Our Philosophy
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="font-accent text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.28] text-foam text-balance italic">
              &ldquo;It&rsquo;s about more than learning strokes &mdash; it&rsquo;s about building
              trust, resilience, and a lifelong love of water.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal>
            <cite className="mt-6 block text-xs font-bold tracking-[0.05em] text-sunlit not-italic uppercase">
              &mdash; SwimNest
            </cite>
          </Reveal>
          <Reveal className="mt-7 space-y-4">
            <p className="max-w-[46ch] text-base font-light text-foam/78">
              We&rsquo;ve watched Northern Beaches kids stand at the pool edge unsure of the water
              &mdash; and we&rsquo;ve watched them find their glide. That shift doesn&rsquo;t
              happen through repetition alone; it happens through coaches who notice, adjust, and
              celebrate the small wins.
            </p>
            <p className="max-w-[46ch] text-base font-light text-foam/78">
              That&rsquo;s why our classes stay small, our instructors stay patient, and every
              lesson plan bends around the swimmer in front of us &mdash; not the other way
              around.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            ref={figureRef}
            className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-[4/5]"
            style={{ background: "linear-gradient(160deg,#1B4E68,#3E90B0)" }}
          >
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          </div>
        </Reveal>
    </Section>
  );
}
