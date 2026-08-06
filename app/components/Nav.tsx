"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";
import { programs } from "@/lib/data/programs";
import { locations } from "@/lib/data/locations";

const linkClass =
  "text-xs font-semibold tracking-wide opacity-90 transition-opacity hover:opacity-100";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"programs" | "locations" | null>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close an open dropdown on outside click — clicking the toggle button or a
  // link inside the dropdown is handled separately via their own onClick.
  useEffect(() => {
    if (!openMenu) return;
    const onClickOutside = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [openMenu]);

  useEffect(() => {
    if (!mobileOpen && !openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, openMenu]);

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-[1.4rem] text-foam transition-[background,padding] duration-300 md:px-14",
        scrolled &&
          "bg-ink/82 py-[0.9rem] shadow-[0_1px_0_var(--color-line-on-dark)] backdrop-blur-md",
      )}
    >
      <Link href="/" className="flex flex-shrink-0 items-center gap-2.5 no-underline">
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={183}
          height={112}
          priority
          className="h-9 w-auto md:h-10"
        />
        <span className="flex items-baseline gap-1.5 font-display text-lg tracking-wide uppercase">
          SwimNest
          <small className="font-accent text-[0.7rem] font-normal text-sunlit italic normal-case">
            swim school
          </small>
        </span>
      </Link>

      <ul ref={desktopNavRef} className="hidden items-center gap-6 md:flex lg:gap-8">
        <li className="relative" onMouseEnter={() => setOpenMenu("programs")}>
          <button
            type="button"
            className={clsx(linkClass, "flex cursor-pointer items-center gap-1 bg-transparent")}
            aria-expanded={openMenu === "programs"}
            aria-haspopup="true"
            onClick={() => setOpenMenu(openMenu === "programs" ? null : "programs")}
          >
            Programs
            <span aria-hidden="true" className="text-[0.6rem]">
              ▾
            </span>
          </button>
          {openMenu === "programs" && (
            <ul className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-line-on-dark bg-ink/95 p-2 shadow-xl backdrop-blur-md">
              {programs.map((program) => {
                const href = `/programs/${program.slug}`;
                const active = pathname === href;
                return (
                  <li key={program.slug}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "block rounded-xl px-3 py-2.5 text-xs font-semibold no-underline transition-colors hover:bg-foam/10 hover:text-foam",
                        active ? "bg-foam/10 text-foam" : "text-foam/90",
                      )}
                      onClick={() => setOpenMenu(null)}
                    >
                      {program.shortName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <Link href="/#team" className={linkClass}>
            Team
          </Link>
        </li>
        <li>
          <Link href="/#prices" className={linkClass}>
            Prices
          </Link>
        </li>

        <li className="relative" onMouseEnter={() => setOpenMenu("locations")}>
          <button
            type="button"
            className={clsx(linkClass, "flex cursor-pointer items-center gap-1 bg-transparent")}
            aria-expanded={openMenu === "locations"}
            aria-haspopup="true"
            onClick={() => setOpenMenu(openMenu === "locations" ? null : "locations")}
          >
            Locations
            <span aria-hidden="true" className="text-[0.6rem]">
              ▾
            </span>
          </button>
          {openMenu === "locations" && (
            <ul className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-line-on-dark bg-ink/95 p-2 shadow-xl backdrop-blur-md">
              {locations.map((location) => {
                const href = `/locations/${location.slug}`;
                const active = pathname === href;
                return (
                  <li key={location.slug}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "block rounded-xl px-3 py-2.5 text-xs font-semibold no-underline transition-colors hover:bg-foam/10 hover:text-foam",
                        active ? "bg-foam/10 text-foam" : "text-foam/90",
                      )}
                      onClick={() => setOpenMenu(null)}
                    >
                      {location.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>

        <li>
          <a
            href="https://swimnest.ud.io"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Swimmers&rsquo; Portal
          </a>
        </li>
      </ul>

      <div className="flex flex-shrink-0 items-center gap-3">
        <div className="hidden sm:block">
          <Button href="/#enquire" size="sm">
            Book a Free Trial
          </Button>
        </div>
        <button
          type="button"
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-foam/30 text-foam md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="absolute top-full right-0 left-0 flex flex-col gap-1 border-t border-line-on-dark bg-ink/97 p-5 backdrop-blur-md md:hidden"
        >
          <Button
            href="/#enquire"
            size="sm"
            className="mb-3 w-full sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            Book a Free Trial
          </Button>
          <MobileSection title="Programs">
            {programs.map((program) => {
              const href = `/programs/${program.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={program.slug}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-sm no-underline hover:bg-foam/10",
                    active ? "font-semibold text-foam" : "text-foam/85",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {program.shortName}
                </Link>
              );
            })}
          </MobileSection>
          <Link
            href="/#team"
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-foam no-underline hover:bg-foam/10"
            onClick={() => setMobileOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/#prices"
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-foam no-underline hover:bg-foam/10"
            onClick={() => setMobileOpen(false)}
          >
            Prices
          </Link>
          <MobileSection title="Locations">
            {locations.map((location) => {
              const href = `/locations/${location.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={location.slug}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-sm no-underline hover:bg-foam/10",
                    active ? "font-semibold text-foam" : "text-foam/85",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {location.name}
                </Link>
              );
            })}
          </MobileSection>
          <a
            href="https://swimnest.ud.io"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-foam no-underline hover:bg-foam/10"
          >
            Swimmers&rsquo; Portal
          </a>
        </div>
      )}
    </nav>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line-on-dark py-2">
      <p className="px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-sunlit uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}
