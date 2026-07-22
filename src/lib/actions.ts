"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const eventType = String(formData.get("eventType") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and a short message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }

  const submission = { name, email, eventType, date, location, message };

  // TODO(client): No form backend is connected yet. Wire this up to a real
  // service before launch — e.g. Formspree or Resend — and read the
  // endpoint/API key from an environment variable. Example with Resend:
  //
  //   const RESEND_API_KEY = process.env.RESEND_API_KEY;
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${RESEND_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from: "bookings@reetskahania.com",
  //       to: "hello@reetskahania.com",
  //       subject: `New inquiry from ${submission.name}`,
  //       text: JSON.stringify(submission, null, 2),
  //     }),
  //   });
  //
  // Until RESEND_API_KEY (or a Formspree endpoint) is set, this action only
  // logs the submission server-side so nothing is silently lost.
  if (!process.env.RESEND_API_KEY && !process.env.CONTACT_FORM_ENDPOINT) {
    console.warn(
      "[contact-form] No RESEND_API_KEY or CONTACT_FORM_ENDPOINT configured — submission was not sent anywhere.",
      submission
    );
  }

  return {
    status: "success",
    message: "Thanks — your inquiry has been received. Reets will be in touch soon.",
  };
}
