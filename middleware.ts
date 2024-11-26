import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const targetDate = new Date("2024-12-04T12:00:00")
  const now = new Date()
  if(targetDate > now){
    if(request.nextUrl.pathname != "/timer"){
      return NextResponse.redirect(new URL("/timer",request.nextUrl))
    }

  }
  if(request.nextUrl.pathname == "timer"){
    return NextResponse.redirect(new URL("/",request.nextUrl))
    
  }
return NextResponse.next()

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/',"/api/:path*","/ecosystem/:path*","/airdrop/:path*","/privacy-policy/:path*","/terms-and-condition/:path*"],
}