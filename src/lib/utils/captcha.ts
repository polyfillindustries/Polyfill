/**
 * reCAPTCHA verification utility for form submissions.
 */

/**
 * Verifies reCAPTCHA token with Google's API.
 * 
 * @param token - reCAPTCHA response token
 * @returns Promise resolving to boolean indicating if verification passed
 */
export async function verifyCaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await res.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

/**
 * Common reCAPTCHA error messages.
 */
export const CAPTCHA_ERRORS = {
  INVALID: "Invalid captcha verification",
  FAILED: "Captcha verification failed",
  MISSING: "Please verify you are human",
} as const;
