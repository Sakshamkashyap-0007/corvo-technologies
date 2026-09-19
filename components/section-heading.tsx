type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2b9bd9]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#0d2448] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#4c5d75] md:text-lg">{description}</p>
    </div>
  );
}
