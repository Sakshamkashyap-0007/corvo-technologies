"use client";

import { FormEvent, useState } from "react";

const initialValues = {
  fullName: "",
  workEmail: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  project: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setMessage(data.error || "Please check the form and try again.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for reaching out. Your enquiry has been received. We’ll get back to you shortly.");
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[24px] border border-[#dfeaf7] bg-white p-6 shadow-[0_18px_40px_rgba(15,31,59,0.04)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Full Name *
          <input
            required
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none ring-0 transition focus:border-[#2b9bd9]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Work Email *
          <input
            required
            type="email"
            name="workEmail"
            value={values.workEmail}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Company
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Phone / WhatsApp
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Service Interested In *
          <select
            required
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          >
            <option value="">Select a service</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Full-Stack Development">Full-Stack Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="AI Agents & Agentic Systems">AI Agents & Agentic Systems</option>
            <option value="AI Automation">AI Automation</option>
            <option value="SaaS & Product Development">SaaS & Product Development</option>
            <option value="RAG & LLM">RAG & LLM</option>
            <option value="Custom Software">Custom Software</option>
            <option value="Backend & API Engineering">Backend & API Engineering</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Project Budget
          <input
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-[#223859]">
        Project Timeline
        <input
          name="timeline"
          value={values.timeline}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
        />
      </label>

      <label className="block space-y-2 text-sm font-medium text-[#223859]">
        Tell Us About Your Project *
        <textarea
          required
          name="project"
          value={values.project}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
        />
      </label>

      {message ? (
        <p className={status === "error" ? "text-sm text-[#b42318]" : "text-sm text-[#0d5d35]"}>{message}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-[#0d2448] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#15345d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry →"}
      </button>
    </form>
  );
}
