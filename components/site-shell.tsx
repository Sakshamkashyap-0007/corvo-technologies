"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { LogoMark } from "@/components/logo-mark";

const serviceDropdown = [
  "AI Solutions",
  "Full-Stack Development",
  "Mobile App Development",
  "AI Agents",
  "AI Automation",
  "SaaS Development",
  "RAG & LLM",
  "Custom Software",
  "Backend & API",
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#0d1d32]">
      <header className={`sticky top-0 z-50 border-b border-[#cbdde4]/80 bg-[#f7fbfc]/95 transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_24px_rgba(13,36,72,0.07)]" : ""}`}>
        <div className="container-shell flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Corvo Technologies home">
            <LogoMark compact />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#18314f] lg:flex">
            <Link href="/" className="link-underline transition hover:text-[#0d2448]">
              Home
            </Link>
            <div className="group relative">
              <button className="link-underline relative z-10 px-1 py-1.5 transition hover:text-[#0d2448]">
                Services
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-20 pt-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="min-w-[260px] border border-[#dfeaf7] bg-white p-3 shadow-[0_18px_40px_rgba(13,36,72,0.08)] translate-y-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item}
                      href={
                        item === "AI Solutions"
                          ? "/services/ai-solutions"
                          : item === "Full-Stack Development"
                            ? "/services/full-stack-development"
                            : item === "Mobile App Development"
                              ? "/services/mobile-app-development"
                              : item === "AI Agents"
                                ? "/services/ai-agents"
                                : item === "AI Automation"
                                  ? "/services/ai-automation"
                                  : item === "SaaS Development"
                                    ? "/services/saas-development"
                                    : item === "RAG & LLM"
                                      ? "/services/rag-llm"
                                      : item === "Custom Software"
                                        ? "/services/custom-software"
                                        : "/services/backend-api"
                      }
                      className="flex items-center justify-between px-3 py-2 text-sm text-[#18314f] transition duration-200 hover:bg-[#eff6ff]"
                    >
                      {item}
                      <span aria-hidden="true" className="text-[#2b9bd9]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navItems
              .filter((item) => !(item.href === "/" || item.href === "/services" || item.href === "/contact"))
              .map((item) => (
                <Link key={item.href} href={item.href} className="link-underline transition hover:text-[#0d2448]">
                  {item.label}
                </Link>
              ))}
            <Link href="/contact" className="group inline-flex items-center gap-3 border-l border-[#cbdde4] pl-6 text-sm font-medium text-[#0d2448] transition hover:text-[#26a9dc]">
              Book a call <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="border border-[#cbdde4] bg-white p-2.5 text-[#17314a]"
            >
              <span className="block text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="container-shell border-t border-[#dfeaf7] py-5 lg:hidden">
            <div className="grid gap-1 text-base text-[#18314f]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-[#edf2f7] py-3">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#cbdde4] bg-[#eaf3f5]">
        <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-4"><LogoMark /></div>
            <p className="mb-3 text-lg font-semibold tracking-[-0.04em] text-[#0d2448]">Build Smarter. Scale Faster.</p>
            <p className="max-w-sm text-sm leading-6 text-[#4c5d75]">Dehradun, Uttarakhand, India</p>
            <p className="mt-4 text-sm leading-6 text-[#4c5d75]">
              Email: <a href="mailto:corvotechnologies@gmail.com" className="text-[#123867]">corvotechnologies@gmail.com</a>
            </p>
            <p className="text-sm leading-6 text-[#4c5d75]">
              Phone: <a href="tel:+919045146904" className="text-[#123867]">+91-9045146904</a>
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-[#4c5d75]">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[#0a66c2]"
                fill="currentColor"
              >
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.7h2.88v8.8H5.5V9.7Zm5.02 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.36v4.72h-2.88v-4.43c0-1.06-.02-2.42-1.47-2.42-1.48 0-1.7 1.15-1.7 2.34v4.51H10.52V9.7Z"/>
              </svg>
              <a href="https://www.linkedin.com/company/corvotechnologies/" target="_blank" rel="noreferrer" className="text-[#123867] hover:text-[#0a66c2]">
                Corvo Technologies LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4d72]">Pages</h3>
            <ul className="space-y-2 text-sm text-[#49617f]">
              {navItems.map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-[#123867]">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4d72]">Legal</h3>
            <ul className="space-y-2 text-sm text-[#49617f]">
              <li><Link href="/privacy" className="hover:text-[#123867]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#123867]">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
