import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Digital systems that help businesses execute with more clarity and momentum."
        description="Corvo helps teams design and deliver AI, product, mobile, and software systems from strategy through to production quality."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group block rounded-[26px] border border-[#dfeaf7] bg-white p-6 transition hover:-translate-y-1 hover:border-[#cfe2ff] hover:shadow-[0_20px_42px_rgba(15,31,59,0.05)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2b9bd9]">{service.eyebrow}</span>
              <ArrowRight size={18} className="text-[#2b9bd9] transition group-hover:translate-x-1" />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0d2448]">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#4c5d75]">{service.short}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.stack.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-[#edf5ff] px-2.5 py-1 text-[11px] font-medium text-[#173d68]">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
