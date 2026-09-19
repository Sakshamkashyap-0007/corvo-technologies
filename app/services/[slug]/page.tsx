import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container-shell py-16 md:py-20">
      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#2b9bd9]">
        <ArrowLeft size={16} />
        Back to services
      </Link>

      <div className="mt-8 rounded-[30px] border border-[#dfeaf7] bg-white p-8 shadow-[0_20px_50px_rgba(15,31,59,0.04)] md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2b9bd9]">{service.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#0d2448] md:text-6xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4c5d75]">{service.description}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[#dfeaf7] bg-[#f4f9ff] p-6">
            <h2 className="text-xl font-semibold text-[#0d2448]">Business problem</h2>
            <p className="mt-4 text-base leading-8 text-[#495e7c]">{service.problem}</p>
          </div>

          <div className="rounded-[24px] border border-[#dfeaf7] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#0d2448]">Typical outcomes</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-[#495e7c]">
              {service.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[26px] border border-[#dfeaf7] bg-[#0d2448] p-6 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a7dfff]">Recommended stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.stack.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#e5f6ff]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <SectionHeading
            eyebrow="Why it matters"
            title={service.quote}
            description="Corvo builds systems that are useful in the real world: clear in execution, resilient in operation, and differentiated by business value."
          />
        </div>
      </div>
    </div>
  );
}
