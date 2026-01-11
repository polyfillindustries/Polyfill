import { z } from "zod";

/**
 * Validation schema for contact form
 */
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, "Phone number is required").trim(),
  subject: z.string().optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters long")
    .trim(),
  captchaToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validation schema for quote request form
 */
export const quoteFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, "Phone number is required").trim(),
  productName: z.string().min(1, "Product name is required").trim(),
  quantity: z.number().positive("Quantity must be greater than 0").optional(),
  quantityUnit: z.string().optional(),
  captchaToken: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
