'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
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

interface ProductEnquirySheetProps {
  productName: string;
}

export const ProductEnquirySheet = ({ productName }: ProductEnquirySheetProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission logic
    // For now, just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', {
      ...formData,
      product: productName,
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Sheet>
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
      <SheetContent side="right" className="w-[90%] p-4 md:px-15 ">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-zinc-900">
            Product Enquiry
          </SheetTitle>
          <SheetDescription className="text-zinc-600">
            Get in touch with us about <span className="font-semibold text-zinc-900">{productName}</span>
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
