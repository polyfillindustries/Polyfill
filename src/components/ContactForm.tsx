"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { API_MESSAGES } from "@/lib/constants";
import { toast } from "sonner";

// Extend Window interface for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      if (error.errors) {
        error.errors.forEach((err: any) => {
          if (err.path[0]) {
            newErrors[err.path[0]] = err.message;
          }
        });
      }
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      let captchaToken: string | undefined;
      
      if (typeof window !== "undefined" && window.grecaptcha) {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (siteKey) {
          captchaToken = await window.grecaptcha.execute(siteKey, {
            action: "submit_contact_form",
          });
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success(result.message || API_MESSAGES.CONTACT_SUCCESS);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : API_MESSAGES.CONTACT_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    
    // Real-time validation for message length
    if (field === "message" && value.length > 0 && value.length < 10) {
      setErrors((prev) => ({ ...prev, message: "Message must be at least 10 characters" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            {/* Name Field */}
            <Field data-invalid={!!errors.name}>
              <FieldLabel
                htmlFor="name"
                className="text-white font-inter font-medium"
              >
                Full Name <span className="text-red-400">*</span>
              </FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                aria-invalid={!!errors.name}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-baccent"
              />
              {errors.name && <FieldError>{errors.name}</FieldError>}
            </Field>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <Field data-invalid={!!errors.email}>
                <FieldLabel
                  htmlFor="email"
                  className="text-white font-inter font-medium"
                >
                  Email Address <span className="text-red-400">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-baccent"
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.phone}>
                <FieldLabel
                  htmlFor="phone"
                  className="text-white font-inter font-medium"
                >
                  Phone Number <span className="text-red-400">*</span>
                </FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-baccent"
                />
                {errors.phone && <FieldError>{errors.phone}</FieldError>}
              </Field>
            </div>

            {/* Subject Field */}
            <Field data-invalid={!!errors.subject}>
              <FieldLabel
                htmlFor="subject"
                className="text-white font-inter font-medium"
              >
                Subject <span className="text-white/60 text-sm">(Optional)</span>
              </FieldLabel>
              <Input
                id="subject"
                type="text"
                placeholder="Brief description of your enquiry"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                aria-invalid={!!errors.subject}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-baccent"
              />
              {errors.subject && <FieldError>{errors.subject}</FieldError>}
            </Field>

            {/* Message Field */}
            <Field data-invalid={!!errors.message}>
              <FieldLabel
                htmlFor="message"
                className="text-white font-inter font-medium"
              >
                Message <span className="text-red-400">*</span>
              </FieldLabel>
              <Textarea
                id="message"
                placeholder="Tell us more about your requirements..."
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                aria-invalid={!!errors.message}
                className="mt-1 resize-none bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-baccent"
              />
              <FieldDescription className="text-white/60 text-sm">
                Minimum 10 characters
              </FieldDescription>
              {errors.message && <FieldError>{errors.message}</FieldError>}
            </Field>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-bprimary to-bsecondary hover:from-bsecondary hover:to-bprimary text-white font-inter font-semibold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
