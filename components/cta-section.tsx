import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryText: string;
};

export function CtaSection({ title, description, primaryHref, primaryText }: CtaSectionProps) {
  return (
    <section className="container-shell mt-20">
      <div className="border border-[#26466e] bg-[#0d2448] px-6 py-12 text-white md:px-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a8dcff]">Let’s build</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.06em] md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#d9ebfb]">{description}</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link href={primaryHref} className="group inline-flex items-center justify-center gap-3 border border-[#8acfeb] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#26a9dc]">
              {primaryText} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
