import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { adminCookieName } from './app/src/data/constants'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if(request.url.includes("/admin")){
  const cookie = (await cookies()).get(adminCookieName)
  if(!cookie||!cookie.value){
    return NextResponse.redirect(new URL("/admin/auth",request.nextUrl))
  }
 
  const res = await fetch(request.nextUrl.origin+"/api/verifyJWT",{
    method:'POST',body:(JSON.stringify({token:cookie.value}))
  })
  const [e,r] =await res.json()
  if(r){
    return NextResponse.redirect(new URL("/admin/auth",request.nextUrl))
  } 
  return NextResponse.next()
}
return NextResponse.next()

  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path',
}