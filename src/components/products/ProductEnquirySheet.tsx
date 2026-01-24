'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

// Extend Window interface for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { quoteFormSchema, type QuoteFormData } from '@/lib/validations';
import type { ProductEnquirySheetProps } from '@/types';

export const ProductEnquirySheet = ({ productName }: ProductEnquirySheetProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    quantityUnit: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Get reCAPTCHA token
      let captchaToken: string | undefined;
      
      if (typeof window !== "undefined" && window.grecaptcha) {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (siteKey) {
          captchaToken = await window.grecaptcha.execute(siteKey, {
            action: "submit_quote_form",
          });
        }
      }

      // Prepare data for validation
      const dataToValidate = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        productName: productName,
        quantity: formData.quantity ? Number(formData.quantity) : undefined,
        quantityUnit: formData.quantityUnit || undefined,
        captchaToken,
      };

      // Validate with zod schema
      const validatedData = quoteFormSchema.parse(dataToValidate);

      // Send to API endpoint
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      // Success - reset form and close sheet
      setFormData({ name: '', email: '', phone: '', quantity: '', quantityUnit: '' });
      setIsOpen(false);
      
      // Show success message
      toast.success('Enquiry submitted successfully!', {
        description: 'We will get back to you shortly.',
      });

    } catch (error) {
      if (error instanceof Error && 'errors' in error) {
        // Zod validation errors
        const zodError = error as any;
        const fieldErrors: Record<string, string> = {};
        zodError.errors?.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error('Failed to submit enquiry', {
          description: 'Please try again or contact us directly.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative flex items-center justify-center gap-3 w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl active:scale-[0.98] group">
          <MessageSquare className="w-5 h-5" />
          <span>Inquire about {productName}</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full p-4 md:px-8 ">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-zinc-900">
            Product Enquiry
          </SheetTitle>
          <SheetDescription className="text-zinc-600 text-lg">
            Get in touch with us about <span className="font-semibold  text-zinc-900">{productName}</span>
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-700 font-semibold">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-700 font-semibold">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
              className="w-full"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-zinc-700 font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Quantity and Unit Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-zinc-700 font-semibold">
                Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                step="any"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 100"
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.quantity && (
                <p className="text-sm text-red-500">{errors.quantity}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantityUnit" className="text-zinc-700 font-semibold">
                Unit
              </Label>
              <Input
                id="quantityUnit"
                name="quantityUnit"
                type="text"
                value={formData.quantityUnit}
                onChange={handleChange}
                placeholder="e.g., kg, tons"
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.quantityUnit && (
                <p className="text-sm text-red-500">{errors.quantityUnit}</p>
              )}
            </div>
          </div>

          {/* Product Info Display */}
          {/* <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <p className="text-sm text-zinc-600">Product of Interest:</p>
            <p className="font-semibold text-zinc-900 mt-1">{productName}</p>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-bprimary hover:bg-bprimary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
};