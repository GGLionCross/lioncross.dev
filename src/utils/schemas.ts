import { z } from "zod";

// Email schema for form validation
export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
});

// Type inference for email form data
export type EmailFormData = z.infer<typeof emailSchema>;
