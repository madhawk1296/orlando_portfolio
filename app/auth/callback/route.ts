import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { supabaseServerClient } from '@/clients/supabase'

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {
  const { origin, searchParams} = new URL(req.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next')

  if (code) {
    const supabase = supabaseServerClient()
    const { data: { user, session }, error } = await supabase.auth.exchangeCodeForSession(code);

    if (user && next) {
      return NextResponse.redirect(`${origin}/admin/change`)
    }
  }
  return NextResponse.redirect(`${origin}/admin`)
}