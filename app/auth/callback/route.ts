import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { supabaseServerClient } from '@/clients/supabase'

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {
  const { origin, searchParams} = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = supabaseServerClient()
    const { data: { user, session }, error } = await supabase.auth.exchangeCodeForSession(code);
    if (user) {
        return NextResponse.redirect(`${origin}/Admin`)
    }
  }
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${origin}/Admin/Login`)
}