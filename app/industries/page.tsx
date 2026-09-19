import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Industries"
        title="Digital products and systems that fit the realities of modern industries."
        description="Corvo helps teams across sectors streamline processes, improve operations, and deliver better customer-facing experiences."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {industries.map((industry) => (
          <div key={industry} className="rounded-[24px] border border-[#dfeaf7] bg-white p-6 text-lg font-medium text-[#123867]">
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}
