import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AppConfig } from './lib/environments'

export async function middleware(request: NextRequest) {
  const cookieName = AppConfig.COOKIE_NAME
  const sessionCookie = request.cookies.get(cookieName)?.value
  const isAuthenticated = !!sessionCookie
  const isLoginPage = request.nextUrl.pathname === '/login'
    
  if (!isAuthenticated && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
}