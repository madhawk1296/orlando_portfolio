import Gallery from "./Gallery";
import { supabaseServerClient } from "@/clients/supabase";

export type SectionType = "paintings" | "sculptures"

export default async function Home() {
  const supabase = supabaseServerClient()
  const { data: items } = await supabase.from("items").select()
  
  return <Gallery gallery={items!} />
}
