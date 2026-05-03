import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that always bypass the coming-soon redirect
const BYPASS = [
  '/coming-soon',
  '/api/',
  '/_next/',
  '/favicon.ico',
  '/ads.txt',
  '/devos-logo.svg',
]

export function middleware(request: NextRequest) {
  const comingSoon = process.env.COMING_SOON === 'true'
  if (!comingSoon) return NextResponse.next()

  const { pathname } = request.nextUrl

  // Allow bypass paths
  if (BYPASS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Redirect everything else to /coming-soon
  const url = request.nextUrl.clone()
  url.pathname = '/coming-soon'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt)).*)',
  ],
}
