import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '89bbd86f646a403fb4257b8fcd363f2e';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

/**
 * IndexNow API - Notify search engines about content changes instantly
 * Supports Bing, Yandex, and other IndexNow-compatible search engines
 * 
 * Usage: POST /api/indexnow with { urls: string[] }
 */
export async function POST(request: NextRequest) {
  try {
    if (!INDEXNOW_KEY) {
      return NextResponse.json(
        { error: 'IndexNow API key not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Validate URLs
    const validUrls = urls.filter((url: string) => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname === 'shaktipolymersindia.com' || urlObj.hostname === 'www.shaktipolymersindia.com';
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid URLs provided' },
        { status: 400 }
      );
    }

    // Submit to IndexNow API (Bing endpoint)
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'shaktipolymersindia.com',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: validUrls,
      }),
    });

    // IndexNow returns 200 for success, 202 for accepted
    if (indexNowResponse.ok || indexNowResponse.status === 202) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${validUrls.length} URL(s) to IndexNow`,
        urls: validUrls,
        status: indexNowResponse.status,
      });
    }

    const errorText = await indexNowResponse.text();

    return NextResponse.json(
      {
        error: 'Failed to submit to IndexNow',
        details: errorText,
        status: indexNowResponse.status,
      },
      { status: indexNowResponse.status }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint to manually trigger indexing of common pages
 * Usage: GET /api/indexnow
 */
export async function GET() {
  const commonPages = [
    `${BASE_URL}/`,
    `${BASE_URL}/about-us`,
    `${BASE_URL}/contact-us`,
    `${BASE_URL}/products`,
    `${BASE_URL}/gallery`,
    `${BASE_URL}/privacy-policy`,
    `${BASE_URL}/terms-and-conditions`,
  ];

  // Call our own POST endpoint
  const response = await fetch(`${BASE_URL}/api/indexnow`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ urls: commonPages }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
