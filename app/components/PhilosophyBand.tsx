"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";

export default function PhilosophyBand() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Defer fetching the (large) philosophy video until the panel is about to
  // scroll into view, so it costs nothing on initial page load.
  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" },
    );
    io.observe(figure);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    video.load();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const playPromise = video.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  }, [shouldLoad]);

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
            lesson plan bends around the swimmer in front of us &mdash; not the other way around.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={figureRef}
          className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-[4/5]"
          style={{ background: "linear-gradient(160deg,#1B4E68,#3E90B0)" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster="/video/philosophy-poster.jpg"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            {shouldLoad && <source src="/video/philosophy.mp4" type="video/mp4" />}
          </video>
        </div>
      </Reveal>
    </Section>
  );
}
