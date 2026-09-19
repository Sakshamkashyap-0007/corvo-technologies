import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export default function ProcessPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Process"
        title="A practical, collaborative process that balances speed and quality."
        description="The process is structured to reduce uncertainty, align stakeholders, and help products move from concept to long-term reliability."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {processSteps.map((step) => (
          <div key={step.step} className="rounded-[24px] border border-[#dfeaf7] bg-white p-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#2b9bd9]">{step.step}</span>
            <h3 className="mt-5 text-xl font-semibold text-[#0d2448]">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#4c5d75]">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
