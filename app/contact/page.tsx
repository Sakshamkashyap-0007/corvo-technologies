import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Start the conversation."
        description="Share your challenge, your product idea, or your roadmap. Corvo will help map out the best path forward."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-[#dfeaf7] bg-white p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0d2448]">Let’s talk</h3>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#4c5d75]">
            <p>Email: <a href="mailto:corvotechnologies@gmail.com" className="text-[#123867]">corvotechnologies@gmail.com</a></p>
            <p>Phone: <a href="tel:+919045146904" className="text-[#123867]">+91-9045146904</a></p>
            <div className="flex items-center gap-3 pt-1">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 text-[#0a66c2]" fill="currentColor">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.7h2.88v8.8H5.5V9.7Zm5.02 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.36v4.72h-2.88v-4.43c0-1.06-.02-2.42-1.47-2.42-1.48 0-1.7 1.15-1.7 2.34v4.51H10.52V9.7Z"/>
              </svg>
              <a href="https://www.linkedin.com/company/corvotechnologies/" target="_blank" rel="noreferrer" className="text-[#123867] hover:text-[#0a66c2]">
                Corvo Technologies LinkedIn
              </a>
            </div>
            <p>Location: Dehradun, Uttarakhand, India</p>
            <p>Availability: Flexible for project-based, fractional, and product-focused engagements.</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
