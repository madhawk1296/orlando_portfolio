import { Database } from "@/types/supabase"
import { createServerClient } from "@supabase/ssr"
import { cookies } from 'next/headers'

export function supabaseServerClient() {
    const cookieStore = cookies()
    return createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    })
}