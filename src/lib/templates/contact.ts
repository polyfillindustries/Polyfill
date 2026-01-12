import { 
  createEmailHeader, 
  createEmailFooter, 
  createCustomerInfoSection, 
  EMAIL_STYLES 
} from "@/lib/utils/email";

/**
 * Generates HTML and text email content for contact form submissions.
 * 
 * @param data - Contact form submission data
 * @returns Object containing formatted HTML and text email content with subject
 */
export function generateContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}) {
  const html = `
    <div style="${EMAIL_STYLES.container}">
      ${createEmailHeader("Contact Form Submission")}
      
      <div style="padding: 30px 20px;">
        ${createCustomerInfoSection({ name, email, phone })}

        ${subject ? `
        <!-- Subject Section -->
        <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 25px;">
          <h3 style="${EMAIL_STYLES.sectionTitle}">Subject</h3>
          <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #212529; font-weight: 600;">${subject}</p>
          </div>
        </div>
        ` : ''}

        <!-- Message Section -->
        <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 25px;">
          <h3 style="${EMAIL_STYLES.sectionTitle}">Message</h3>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #212529; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>

        ${createEmailFooter()}
      </div>
    </div>
  `;

  const text = `
Polyfill Industries - CONTACT FORM SUBMISSION
==============================================

CUSTOMER INFORMATION:
---------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
${subject ? `\nSUBJECT: ${subject}\n` : ''}
MESSAGE:
--------
${message}

---
This is an automated message from Polyfill Industries contact form.
Please respond directly to this email to contact the customer.
  `;

  return {
    subject: subject ? `Contact Form: ${subject} - ${name}` : `Contact Form Query - ${name}`,
    html,
    text,
  };
}
