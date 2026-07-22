"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { eventTypes, siteConfig } from "@/lib/site-config";

const initialState: ContactFormState = { status: "idle", message: "" };

const fieldClasses =
  "w-full rounded-xl border border-ink/20 bg-ivory px-4 py-3 text-base text-ink placeholder:text-ink/65 outline-none transition-colors duration-150 ease-out focus:border-ink";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-on-ink transition-all duration-200 ease-out hover:bg-ink/90 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending…" : "Send Inquiry"}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className="bg-beige/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
                Let&rsquo;s capture your day.
              </h2>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-ink/75 sm:text-lg">
                Tell us a bit about your event and we&rsquo;ll follow up to
                talk through coverage, dates, and pricing.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-10 inline-flex items-center gap-2 border-t border-ink/15 pt-6 text-base font-medium text-ink"
              >
                {siteConfig.email}
                <ArrowUpRight
                  size={16}
                  weight="light"
                  aria-hidden
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <p className="mt-1 text-sm text-ink/60">Prefer email? Reach out directly.</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.15}>
              <form action={formAction} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-ink">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-medium text-ink">
                      Event type
                    </label>
                    <select id="eventType" name="eventType" defaultValue="" className={fieldClasses}>
                      <option value="" disabled>
                        Select an event type
                      </option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-ink">
                      Event date
                    </label>
                    <input id="date" name="date" type="date" className={fieldClasses} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-ink">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Venue or city"
                    className={fieldClasses}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your event"
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <SubmitButton />
                  <p aria-live="polite" className="text-sm">
                    {state.status === "success" && (
                      <span className="text-ink/80">{state.message}</span>
                    )}
                    {state.status === "error" && (
                      <span className="text-[#8a3b2f]">{state.message}</span>
                    )}
                  </p>
                </div>

                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink/70">
                  Form isn&rsquo;t connected to email yet. See TODO in
                  src/lib/actions.ts to wire up Formspree or Resend.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
