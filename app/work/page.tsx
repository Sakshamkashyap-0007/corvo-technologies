import Image from "next/image";
import { projects } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export default function WorkPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <SectionHeading eyebrow="Selected work" title="A record of products, experiments, and useful systems." description="The work spans AI experiences, productivity products, and business-focused digital systems. No invented metrics, just the work itself." />
      <div className="mt-16 border-t border-[#cbdde4]">{projects.map((project, index) => <Reveal key={project.name} className="grid gap-7 border-b border-[#cbdde4] py-8 md:grid-cols-[.16fr_1fr_.8fr] md:items-center" delay={index * 0.04}><span className="font-mono text-xs text-[#72a0ae]">0{index + 1}</span>{project.image ? <div className="group relative aspect-video overflow-hidden rounded-[3px] border border-[#cbdde4] bg-[#edf5f7]"><Image src={project.image} alt={`${project.name} project screenshot`} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]" /></div> : <div className="flex aspect-video items-end border border-[#cbdde4] bg-[#edf5f7] p-5"><span className="text-sm text-[#527083]">Project image not supplied</span></div>}<div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#26a9dc]">{project.category} / {project.type}</p><h2 className="mt-3 text-3xl tracking-[-.06em] text-[#0d2448]">{project.name}</h2><p className="mt-3 text-sm leading-7 text-[#4c5d75]">{project.description}</p><div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#527083]">{project.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div></Reveal>)}</div>
    </div>
  );
}