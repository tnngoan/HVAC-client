"use server";

import { resend } from "@/lib/resend";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import ContactNotification from "@/emails/ContactNotification";
import { business } from "@/data/business";

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Honeypot check
  if (data.honeypot) {
    // Silently reject bot submissions
    return { success: true };
  }

  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your entries." };
  }

  try {
    await resend.emails.send({
      from: `${business.name} Website <leads@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://comfortairhvac.com").hostname}>`,
      to: [business.email],
      replyTo: parsed.data.email,
      subject: `New Service Request: ${parsed.data.serviceType} — ${parsed.data.name}`,
      react: ContactNotification({ data: parsed.data }),
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send your request. Please call us directly.",
    };
  }
}
