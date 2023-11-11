import { Database } from "@/types/supabase"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from 'next/headers'

export function supabaseServerClient(viewOnly=false) {
    const cookieStore = cookies()
    return createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: viewOnly ? {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      } : {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options })
        },
      },
    })
}


export function supabaseAdminClient() {
  
}