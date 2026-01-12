import { sendEmail, EMAIL_CONFIG } from "@/lib/utils/send-email";
import { 
  createErrorResponse, 
  createSuccessResponse, 
  withErrorHandling,
  API_ERRORS 
} from "@/lib/utils/api";
import { NextRequest } from "next/server";
import { generateContactEmail } from "@/lib/templates/contact";
import { contactFormSchema } from "@/lib/validations";
import { API_MESSAGES } from "@/lib/constants";
import { verifyCaptcha } from "@/lib/utils/captcha";

/**
 * Handles contact form submissions with email notifications.
 * 
 * @param req - Next.js request object containing form data and captcha token
 * @returns JSON response with success/error status
 */
export async function POST(req: NextRequest) {
  return withErrorHandling(async () => {
    const body = await req.json();
    
    // Validate request body with Zod schema
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return createErrorResponse({
        error: validationResult.error.issues[0]?.message || "Invalid form data",
        status: 400
      });
    }

    const { name, email, phone, subject, message, captchaToken } = validationResult.data;

    // Verify captcha
    if (captchaToken) {
      const isValidCaptcha = await verifyCaptcha(captchaToken);
      if (!isValidCaptcha) {
        return createErrorResponse(API_ERRORS.INVALID_CAPTCHA);
      }
    }

    // Generate email content
    const emailContent = generateContactEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send email via Resend
    await sendEmail({
      from: EMAIL_CONFIG.from.contact,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    return createSuccessResponse({ 
      message: API_MESSAGES.CONTACT_SUCCESS
    });
  });
}
