/**
 * Email sending utilities using Resend
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Email configuration for different form types
 */
export const EMAIL_CONFIG = {
  from: {
    contact: process.env.NOREPLY_EMAIL || 'Polyfill Industries <onboarding@resend.dev>',
    quote: process.env.NOREPLY_EMAIL || 'Polyfill Industries <onboarding@resend.dev>',
  },
  to: process.env.BUSINESS_EMAIL || 'shaktipolymer@gmail.com',
} as const;

/**
 * Send email using Resend
 * 
 * @param options - Email sending options
 * @returns Promise with email sending result
 */
export async function sendEmail({
  from,
  to,
  replyTo,
  subject,
  html,
  text,
}: {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}) {
  try {
    const data = await resend.emails.send({
      from,
      to,
      replyTo,
      subject,
      html,
      text,
    });

    return data;
  } catch (error) {
    throw new Error('Failed to send email');
  }
}
