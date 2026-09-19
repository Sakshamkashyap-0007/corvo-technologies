import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const EMAIL_TO = "corvotechnologies@gmail.com";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const required = [
      "fullName",
      "workEmail",
      "service",
      "project",
    ];

    const missing = required.filter((field) => !String(payload[field] || "").trim());

    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Please complete the required fields before submitting." },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#0d2448;">
        <h2 style="margin:0 0 16px;">New enquiry from Corvo website</h2>
        <p style="margin:0 0 12px;"><strong>Name:</strong> ${String(payload.fullName).trim()}</p>
        <p style="margin:0 0 12px;"><strong>Email:</strong> ${String(payload.workEmail).trim()}</p>
        <p style="margin:0 0 12px;"><strong>Company:</strong> ${String(payload.company || "-").trim()}</p>
        <p style="margin:0 0 12px;"><strong>Phone:</strong> ${String(payload.phone || "-").trim()}</p>
        <p style="margin:0 0 12px;"><strong>Service:</strong> ${String(payload.service).trim()}</p>
        <p style="margin:0 0 12px;"><strong>Budget:</strong> ${String(payload.budget || "-").trim()}</p>
        <p style="margin:0 0 12px;"><strong>Timeline:</strong> ${String(payload.timeline || "-").trim()}</p>
        <p style="margin:0 0 12px;"><strong>Project:</strong></p>
        <p style="margin:0;white-space:pre-wrap;">${String(payload.project).trim()}</p>
      </div>
    `;

    if (!process.env.RESEND_API_KEY || !resend) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: EMAIL_TO,
      replyTo: String(payload.workEmail).trim(),
      subject: `New enquiry: ${String(payload.service).trim()}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the enquiry." },
      { status: 500 },
    );
  }
}
