"use client";

import { useState } from "react";

export function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "fdca3f54-7ba4-487b-a6b3-f6ce9eac7fe6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[24px] border border-[#dfeaf7] bg-white p-6 shadow-[0_18px_40px_rgba(15,31,59,0.04)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Name *
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#223859]">
          Email *
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-[#223859]">
        Message *
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-[#d7e3f5] bg-[#f7fbff] px-3.5 py-3 text-[#10213d] outline-none transition focus:border-[#2b9bd9]"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#0d2448] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#15345d]"
      >
        Submit
      </button>

      {result ? <p className="text-sm text-[#0d5d35]">{result}</p> : null}
    </form>
  );
}
