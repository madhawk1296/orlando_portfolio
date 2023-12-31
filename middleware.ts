import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabaseServerClient } from './clients/supabase'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const supabase = supabaseServerClient()
    const currentPath = new URL(request.url).pathname;

    try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user && (!currentPath.startsWith('/admin/manage') || currentPath.startsWith('/admin/login'))) {
            console.log(currentPath.startsWith('/admin/change'))
            if(!currentPath.startsWith('/admin/change')) {
                return NextResponse.redirect(new URL('/admin/manage', request.url))
            }
        }

        if (!user && !currentPath.startsWith('/admin/login') && !currentPath.startsWith('/admin/reset')) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    } catch(e) {
        console.log(e)
    }

    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}