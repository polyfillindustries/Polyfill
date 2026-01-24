import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Validate secret token
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret token' }, 
        { status: 401 }
      )
    }

    // Get the tag to revalidate (optional - defaults to all)
    const tag = request.nextUrl.searchParams.get('tag')
    
    if (tag) {
      // Revalidate specific tag
      revalidateTag(tag, 'default')
      console.log(`✅ Revalidated tag: ${tag}`)
    } else {
      // Revalidate all product and category caches
      revalidateTag('products', 'default')
      revalidateTag('categories', 'default')
      revalidateTag('gallery', 'default')
      console.log('✅ Revalidated all tags: products, categories, gallery')
    }

    return NextResponse.json({ 
      revalidated: true, 
      tag: tag || 'all',
      now: Date.now() 
    })
    
  } catch (error) {
    console.error('❌ Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating cache' }, 
      { status: 500 }
    )
  }
}
