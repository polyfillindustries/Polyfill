import { 
  createEmailHeader, 
  createEmailFooter, 
  createCustomerInfoSection, 
  createProductDetailsSection,
  EMAIL_STYLES 
} from "@/lib/utils/email";

/**
 * Generates HTML and text email content for product quote requests.
 * 
 * @param data - Quote request data including contact info and product details
 * @returns Object containing formatted HTML and text email content with subject
 */
export function generateQuoteEmail({
  name,
  email,
  phone,
  productName,
  quantity,
  quantityUnit,
}: {
  name: string;
  email: string;
  phone: string;
  productName: string;
  quantity?: number;
  quantityUnit?: string;
}) {
  const quantityDisplay = quantity && quantityUnit ? `${quantity} ${quantityUnit}` : 'Not specified';
  
  const html = `
    <div style="${EMAIL_STYLES.container}">
      ${createEmailHeader("New Product Quote Request")}
      
      <div style="padding: 30px 20px;">
        ${createCustomerInfoSection({ name, email, phone })}

        ${createProductDetailsSection({ productName, quantity, quantityUnit })}

        ${createEmailFooter()}
      </div>
    </div>
  `;

  const text = `
Polyfill Industries - NEW PRODUCT QUOTE REQUEST
================================================

CUSTOMER INFORMATION:
---------------------
Name: ${name}
Email: ${email}
Phone: ${phone}

PRODUCT DETAILS:
----------------
Product: ${productName}
Quantity: ${quantityDisplay}

---
This quote request was submitted through the Polyfill Industries website.
Please respond promptly to maintain customer satisfaction.
  `.trim();

  return { 
    subject: `Quote Request: ${productName} - ${name}`,
    html, 
    text 
  };
}
