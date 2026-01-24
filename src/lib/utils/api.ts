/**
 * API response utilities for consistent error handling and responses.
 */

import { NextResponse } from 'next/server';

/**
 * Standard API error responses.
 */
export const API_ERRORS = {
  INVALID_CAPTCHA: { error: "Invalid captcha verification", status: 400 },
  CAPTCHA_FAILED: { error: "Captcha verification failed", status: 400 },
  INVALID_REQUEST: { error: "Invalid request format", status: 400 },
  EMAIL_FAILED: { error: "Failed to send email", status: 500 },
  MISSING_PARAMS: { error: "Missing required parameters", status: 400 },
  INTERNAL_ERROR: { error: "Internal server error", status: 500 },
} as const;

/**
 * Creates a standardized error response.
 * 
 * @param error - Error configuration object
 * @returns NextResponse with error message and status
 */
export function createErrorResponse(error: { error: string; status: number }) {
  return NextResponse.json({ error: error.error }, { status: error.status });
}

/**
 * Creates a standardized success response.
 * 
 * @param data - Success data to return
 * @param status - HTTP status code (defaults to 200)
 * @returns NextResponse with success data
 */
export function createSuccessResponse(data: Record<string, unknown>, status: number = 200) {
  return NextResponse.json({ success: true, ...data }, { status });
}

/**
 * Wraps an async API handler with error handling.
 * 
 * @param handler - Async function to execute
 * @returns Promise resolving to NextResponse
 */
export async function withErrorHandling(handler: () => Promise<NextResponse>): Promise<NextResponse> {
  try {
    return await handler();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return createErrorResponse({
      error: errorMessage,
      status: 500
    });
  }
}

/**
 * Validates required fields in request data.
 * 
 * @param data - Object to validate
 * @param requiredFields - Array of required field names
 * @returns Object with isValid boolean and missing fields array
 */
export function validateRequiredFields(data: Record<string, unknown>, requiredFields: string[]) {
  const missing = requiredFields.filter(field => {
    const value = data[field];
    return !value || (typeof value === 'string' && value.trim() === '');
  });
  return {
    isValid: missing.length === 0,
    missing,
  };
}
