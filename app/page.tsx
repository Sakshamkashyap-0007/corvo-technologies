import Image from "next/image";
import Link from "next/link";
import { capabilityStrip, processSteps, projects, services } from "@/lib/site-data";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

const homeProjectNames = [
  "AI Media & Content Generator",
  "Medical Chatbot",
  "Alex Chatbot",
  "Gym CRM",
];

export default function Home() {
  const homeProjects = homeProjectNames.flatMap((name) => projects.filter((project) => project.name === name));

  return (
    <div className="pb-16 md:pb-20">
      <section className="container-shell pt-14 md:pt-20 lg:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-12 lg:gap-16">
          <Reveal className="pb-2">
            <div className="brand-lockup mb-6 flex items-center gap-4">
              <div className="brand-mark flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#dfeaf7] bg-white shadow-[0_22px_36px_rgba(13,36,72,0.10)]">
                <Image
                  src="/images/corvo-logo-mark.png"
                  alt="Corvo Technologies"
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#26a9dc]">Corvo Technologies</p>
                <p className="mt-1 text-sm font-medium tracking-[0.16em] text-[#4c5d75]">Build Smarter. Scale Faster.</p>
              </div>
            </div>

            <h1 className="max-w-xl text-[clamp(3.2rem,6vw,6.7rem)] leading-[.88] tracking-[-.075em] text-[#0d2448]">
              Useful<br />
              <em className="brand-gradient text-[#26a9dc]">technology.</em>
            </h1>
            <p className="mt-7 max-w-md text-[1.02rem] leading-8 text-[#4c5d75] md:text-[1.08rem]">
              Digital products and intelligent systems for businesses ready to move with more clarity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="hero-badge">AI systems</span>
              <span className="hero-badge">Product growth</span>
              <span className="hero-badge">Automation</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm font-semibold md:gap-6">
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-[#0d2448] px-5 py-3.5 text-white shadow-[0_18px_30px_rgba(13,36,72,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#26a9dc] hover:shadow-[0_22px_36px_rgba(38,169,220,0.28)]">
                Start a project
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
              <Link href="/work" className="link-underline text-[#0d2448] transition-colors duration-300 hover:text-[#26a9dc]">
                View selected work
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-visual-wrap" delay={0.1}>
            <div className="hero-image image-frame min-h-[340px] overflow-hidden rounded-[28px] border border-[#dfeaf7] shadow-[0_25px_60px_rgba(13,36,72,0.08)] md:min-h-[520px]">
              <span className="sr-only">Corvo Technologies visual identity</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-3 border-y border-[#cbdde4] py-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#527083] sm:grid-cols-3 md:grid-cols-6">
          {capabilityStrip.map((item) => (
            <span key={item} className="py-1">{item}</span>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 grid gap-10 md:mt-32 md:grid-cols-[.72fr_1.28fr] md:gap-12">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#26a9dc]">What we do</p>
          <h2 className="mt-5 max-w-sm text-4xl leading-[.98] tracking-[-.06em] text-[#0d2448] md:text-5xl">
            The work behind better work.
          </h2>
        </Reveal>

        <Reveal className="border-t border-[#cbdde4]" delay={0.1}>
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between gap-5 border-b border-[#cbdde4] py-5 transition hover:bg-[#edf5f7] hover:px-4"
            >
              <h3 className="text-xl tracking-[-.04em] text-[#0d2448] md:text-2xl">{service.title}</h3>
              <span className="text-xl text-[#26a9dc] transition-transform group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="container-shell mt-24 md:mt-32">
        <Reveal className="flex flex-col items-start justify-between gap-5 border-b border-[#cbdde4] pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#26a9dc]">Selected work</p>
            <h2 className="mt-4 text-4xl tracking-[-.06em] text-[#0d2448] md:text-5xl">Built, then put to work.</h2>
          </div>
          <Link href="/work" className="link-underline text-sm font-semibold text-[#0d2448]">
            See all work
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeProjects.map((project, index) => (
            <Reveal key={project.name} className="project-card group flex min-w-0 flex-col" delay={index * 0.08}>
              {project.image ? (
                <div
                  className="image-frame aspect-video w-full shrink-0 overflow-hidden rounded-[20px] border border-[#cbdde4] bg-[#edf5f7] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={`${project.name} project screenshot`}
                />
              ) : null}

              <div className="flex flex-1 items-start justify-between gap-3 pt-4">
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#63808e]">{project.category}</p>
                  <h3 className="mt-2 text-lg tracking-[-.04em] text-[#0d2448]">{project.name}</h3>
                  <p className="project-description mt-2 max-h-0 overflow-hidden text-xs leading-5 text-[#4c5d75] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-40 group-hover:opacity-100 group-hover:text-[#233d61]">
                    {project.description}
                  </p>
                </div>
                <span className="text-lg text-[#26a9dc] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:scale-110" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 grid gap-10 border-t border-[#cbdde4] pt-16 md:mt-32 md:grid-cols-[.72fr_1.28fr] md:gap-12">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#26a9dc]">How we work</p>
          <h2 className="mt-5 max-w-sm text-4xl leading-[.98] tracking-[-.06em] text-[#0d2448] md:text-5xl">
            Clear steps. No theatre.
          </h2>
        </Reveal>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {processSteps.slice(0, 6).map((step, index) => (
            <Reveal key={step.step} className="border-t border-[#cbdde4] pt-4 transition-colors hover:border-[#26a9dc]" delay={index * 0.04}>
              <h3 className="text-2xl tracking-[-.04em] text-[#0d2448]">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#4c5d75]">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection title="Have a useful problem to solve?" description="Tell us what needs to work better." primaryHref="/contact" primaryText="Start a conversation" />
    </div>
  );
}