import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/lib/site-data";

export default function SolutionsPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Solutions"
        title="Business and product solutions shaped around real workflows."
        description="We solve operational and product challenges with systems designed to improve delivery, decision-making, and user experience."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {solutions.map((solution) => (
          <div key={solution.title} className="rounded-[26px] border border-[#dfeaf7] bg-white p-6">
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0d2448]">{solution.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#4c5d75]">{solution.problem}</p>
            <p className="mt-4 border-t border-[#edf3fb] pt-4 text-sm leading-7 text-[#304c6d]">{solution.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
