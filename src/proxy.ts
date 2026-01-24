import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || 
             'unknown';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function isLocalhost(request: NextRequest): boolean {
  const host = request.headers.get('host') || '';
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || '';
  
  return (
    host.includes('localhost') ||
    host.includes('127.0.0.1') ||
    host.includes('[::1]') ||
    ip === '127.0.0.1' ||
    ip === '::1'
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const isApiRoute = pathname.startsWith('/api/contact') || 
                     pathname.startsWith('/api/enquiry') ||
                     pathname.startsWith('/api/whatsapp');

  if (isApiRoute) {
    if (process.env.NODE_ENV === 'production' && isLocalhost(request)) {
      return NextResponse.json(
        { error: 'Submissions from localhost are not allowed' },
        { status: 403 }
      );
    }

    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/contact/:path*',
    '/api/enquiry/:path*',
    '/api/whatsapp/:path*',
  ],
};
