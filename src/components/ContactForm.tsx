"use client";

import { useActionState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import {
  sendContact,
  contactInitialState,
  type ContactState,
} from "@/app/actions/contact";

const fieldBase =
  "w-full rounded-xl border bg-cream/5 px-4 py-3 text-cream placeholder:text-cream-muted/60 transition-colors focus:outline-none focus-visible:border-accent-bright focus-visible:ring-2 focus-visible:ring-accent-bright/40";

function errId(state: ContactState, field: "name" | "email" | "message") {
  return state.fieldErrors?.[field] ? `${field}-error` : undefined;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    contactInitialState,
  );

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-cream">
          <CheckCircle2 size={24} />
        </span>
        <h3 className="font-display text-2xl font-semibold text-cream">
          Message sent
        </h3>
        <p className="text-cream-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-cream-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!state.fieldErrors?.name}
              aria-describedby={errId(state, "name")}
              className={`${fieldBase} ${state.fieldErrors?.name ? "border-accent-bright" : "border-cream/20"}`}
              placeholder="Your name"
            />
            {state.fieldErrors?.name && (
              <p id="name-error" className="mt-1.5 text-sm text-accent-bright">
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-cream-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!state.fieldErrors?.email}
              aria-describedby={errId(state, "email")}
              className={`${fieldBase} ${state.fieldErrors?.email ? "border-accent-bright" : "border-cream/20"}`}
              placeholder="you@company.com"
            />
            {state.fieldErrors?.email && (
              <p id="email-error" className="mt-1.5 text-sm text-accent-bright">
                {state.fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm text-cream-muted">
            What&apos;s this about?
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue="A project"
            className={`${fieldBase} border-cream/20 appearance-none`}
          >
            <option className="bg-ink-invert">A project</option>
            <option className="bg-ink-invert">AI training / evaluation</option>
            <option className="bg-ink-invert">A workshop or talk</option>
            <option className="bg-ink-invert">Hiring me</option>
            <option className="bg-ink-invert">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-cream-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={!!state.fieldErrors?.message}
            aria-describedby={errId(state, "message")}
            className={`${fieldBase} resize-y ${state.fieldErrors?.message ? "border-accent-bright" : "border-cream/20"}`}
            placeholder="What are you working on, and how can I help?"
          />
          {state.fieldErrors?.message && (
            <p id="message-error" className="mt-1.5 text-sm text-accent-bright">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        {/* Honeypot — hidden from people, catnip for bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company">Company (leave blank)</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Sending…" : "Send message"}
            {!pending && <Send size={17} />}
          </button>
          {state.status === "error" && (
            <p role="alert" className="text-sm text-accent-bright">
              {state.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
