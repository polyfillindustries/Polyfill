/**
 * Shared email template utilities for consistent email formatting
 */

export const EMAIL_STYLES = {
  container: "font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #f8f9fa;",
  header: "background: linear-gradient(135deg, #0387FF 0%, #154A7E 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;",
  headerTitle: "margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);",
  sectionTitle: "color: #154A7E; font-size: 18px; font-weight: 700; margin: 0 0 15px 0; border-bottom: 3px solid #0387FF; padding-bottom: 10px;",
  infoRow: "display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e9ecef;",
  label: "color: #6c757d; font-weight: 600; font-size: 14px;",
  value: "color: #212529; font-weight: 500;",
  footer: "background: #343a40; color: #adb5bd; padding: 25px 20px; text-align: center; border-radius: 0 0 12px 12px; margin-top: 30px;",
};

/**
 * Creates the email header section
 */
export function createEmailHeader(title: string): string {
  return `
    <div style="${EMAIL_STYLES.header}">
      <h1 style="${EMAIL_STYLES.headerTitle}">⚗️ Polyfill Industries</h1>
      <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">${title}</p>
    </div>
  `;
}

/**
 * Creates the email footer section
 */
export function createEmailFooter(): string {
  return `
    <div style="${EMAIL_STYLES.footer}">
      <p style="margin: 0 0 10px 0; font-size: 14px;">This is an automated notification from Polyfill Industries</p>
      <p style="margin: 0; font-size: 12px; opacity: 0.8;">Please respond promptly to maintain customer satisfaction</p>
    </div>
  `;
}

/**
 * Creates customer information section
 */
export function createCustomerInfoSection({
  name,
  email,
  phone,
  property,
}: {
  name: string;
  email: string;
  phone?: string;
  property?: string;
}): string {
  return `
    <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 25px;">
      <h3 style="${EMAIL_STYLES.sectionTitle}">Customer Information</h3>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <div style="${EMAIL_STYLES.infoRow}">
          <span style="${EMAIL_STYLES.label}">👤 Name:</span>
          <span style="${EMAIL_STYLES.value}">${name}</span>
        </div>
        <div style="${EMAIL_STYLES.infoRow}">
          <span style="${EMAIL_STYLES.label}">📧 Email:</span>
          <span style="${EMAIL_STYLES.value}">${email}</span>
        </div>
        ${phone ? `
        <div style="${EMAIL_STYLES.infoRow}">
          <span style="${EMAIL_STYLES.label}">📱 Phone:</span>
          <span style="${EMAIL_STYLES.value}">${phone}</span>
        </div>
        ` : ''}
        ${property ? `
        <div style="${EMAIL_STYLES.infoRow}; border-bottom: none;">
          <span style="${EMAIL_STYLES.label}">🏠 Property Type:</span>
          <span style="${EMAIL_STYLES.value}">${property}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Creates design reference section (for quote requests)
 */
export function createDesignReferenceSection(
  designIdeaLink: string,
  designIdeaTitle: string
): string {
  return `
    <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 25px;">
      <h3 style="${EMAIL_STYLES.sectionTitle}">Referenced Design</h3>
      <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
        <p style="margin: 0 0 10px 0; color: #212529; font-weight: 600;">📐 ${designIdeaTitle}</p>
        <a href="${designIdeaLink}" style="color: #007bff; text-decoration: none; font-weight: 500;">
          View Design →
        </a>
      </div>
    </div>
  `;
}

/**
 * Creates product details section (for quote requests)
 */
export function createProductDetailsSection({
  productName,
  quantity,
}: {
  productName: string;
  quantity?: string;
}): string {
  return `
    <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 25px;">
      <h3 style="${EMAIL_STYLES.sectionTitle}">Product Details</h3>
      <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc;">
        <div style="${EMAIL_STYLES.infoRow}">
          <span style="${EMAIL_STYLES.label}">📦 Product:</span>
          <span style="${EMAIL_STYLES.value}">${productName}</span>
        </div>
        ${quantity ? `
        <div style="${EMAIL_STYLES.infoRow}; border-bottom: none;">
          <span style="${EMAIL_STYLES.label}">📊 Quantity:</span>
          <span style="${EMAIL_STYLES.value}">${quantity}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}
