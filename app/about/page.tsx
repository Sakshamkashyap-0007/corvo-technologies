import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="About"
        title="A boutique technology partner building practical digital products."
        description="Corvo brings together strategy, product thinking, and engineering execution to help ambitious teams build the systems they need to grow."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[#dfeaf7] bg-white p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0d2448]">Our approach</h3>
          <p className="mt-4 text-base leading-8 text-[#4c5d75]">
            Corvo works at the intersection of business clarity and technical execution. We believe the strongest digital products are built by aligning product strategy, user experience, and engineering discipline from day one.
          </p>
        </div>
        <div className="rounded-[28px] border border-[#dfeaf7] bg-[#eff6ff] p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0d2448]">What we value</h3>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#445f7c]">
            <li>• Clear product goals with measurable business value.</li>
            <li>• Thoughtful architecture and maintainable systems.</li>
            <li>• Collaborative delivery with meaningful iteration.</li>
            <li>• Excellent user experience grounded in real workflows.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
