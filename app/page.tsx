import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import Gallery from "./Gallery";
import { Database } from "@/types/supabase";

export type SectionType = "paints" | "sculptures"

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
    },
  })
  const { data: items } = await supabase.from("items").select()
  
  return <Gallery gallery={items!} />
}
