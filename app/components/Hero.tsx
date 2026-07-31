"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.setAttribute("autoplay", "");
    const playPromise = video.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  }, []);

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full bg-ink object-cover object-[center_30%]"
        poster="/video/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,52,73,0.86) 0%, rgba(18,52,73,0.46) 32%, rgba(18,52,73,0.06) 58%, rgba(18,52,73,0.22) 100%), linear-gradient(to right, rgba(18,52,73,0.28) 0%, transparent 30%)",
        }}
      />

      <p className="absolute bottom-[0.9rem] left-5 z-[2] text-2xs tracking-[0.08em] text-foam/45 uppercase md:left-14">
        Sample clip for concept review only &middot; licensed footage to replace before launch
      </p>

      <div className="relative z-[2] max-w-[1180px] px-5 pt-24 pb-12 md:px-14 md:pt-40 md:pb-18">
        <p className="mb-[1.1rem] flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
          Sydney&rsquo;s Northern Beaches
        </p>
        <h1 className="max-w-[14ch] font-display text-hero leading-[0.94] tracking-[0.003em] text-foam text-balance uppercase">
          From uncertain
          <br />
          to <em className="text-sunlit not-italic">unstoppable.</em>
        </h1>
        <p className="mt-5 max-w-[22ch] font-accent text-lg text-foam italic">
          Small classes. Big confidence.
        </p>
        <p className="mt-[1.1rem] max-w-[42ch] text-md font-light text-foam/82">
          Every child&rsquo;s first breath underwater becomes their next stroke forward. Patient,
          personalised swim instruction that turns hesitation into a lifelong love of the water.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-transparent bg-accent px-7 py-[0.95rem] text-sm font-bold text-ink no-underline transition-[background,transform] hover:-translate-y-0.5 hover:bg-sunlit"
          >
            Book a Free Trial
          </Link>
          <Link
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-foam/50 bg-transparent px-7 py-[0.95rem] text-sm font-bold text-foam no-underline transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-foam hover:bg-foam/8"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      <div className="absolute right-5 bottom-8 z-[2] flex flex-col items-center gap-2.5 text-2xs tracking-[0.16em] text-foam/70 uppercase md:right-14">
        <span>Scroll</span>
        <span className="h-[38px] w-px animate-[scrollpulse_2.2s_ease-in-out_infinite] bg-gradient-to-b from-foam/70 to-transparent motion-reduce:animate-none" />
      </div>
    </header>
  );
}
