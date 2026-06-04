"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const contactInitialState: ContactState = { status: "idle" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const topic = clean(formData.get("topic"));
  const message = clean(formData.get("message"));

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please tell me your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Enter a valid email so I can reply.";
  if (message.length < 10) fieldErrors.message = "A little more detail helps (10+ characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || site.email;
  // Resend's shared sender works without verifying a domain; swap for your own
  // verified address (e.g. "Mashel Odera <hello@yourdomain>") once you have one.
  const from = process.env.CONTACT_FROM || "Mashel Odera Site <onboarding@resend.dev>";

  if (!apiKey) {
    // Not configured yet: fail loudly but kindly, and point to direct channels.
    console.error("[contact] RESEND_API_KEY is not set; cannot send email.");
    return {
      status: "error",
      message:
        "The form isn't connected yet. Please reach me on WhatsApp or by email for now.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}${topic ? ` · ${topic}` : ""}`,
        text: [
          `Name:  ${name}`,
          `Email: ${email}`,
          topic ? `Topic: ${topic}` : null,
          "",
          message,
          "",
          "— Sent from the contact form on mashelodera-portfolio.vercel.app",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, detail);
      return {
        status: "error",
        message:
          "Something went wrong sending that. Please try WhatsApp or email instead.",
      };
    }

    return {
      status: "success",
      message: "Thanks — your message is on its way. I usually reply within a day.",
    };
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      status: "error",
      message: "Network hiccup. Please try again, or reach me on WhatsApp.",
    };
  }
}
