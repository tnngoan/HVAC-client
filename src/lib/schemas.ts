import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
      "Please enter a valid phone number"
    ),
  serviceType: z.enum(
    [
      "ac-repair",
      "heating",
      "emergency",
      "installation",
      "maintenance",
      "air-quality",
      "other",
    ],
    { required_error: "Please select a service" }
  ),
  propertyType: z.enum(["residential", "commercial"], {
    required_error: "Please select property type",
  }),
  message: z
    .string()
    .min(10, "Please describe your needs (at least 10 characters)")
    .max(1000, "Message must be under 1000 characters"),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
