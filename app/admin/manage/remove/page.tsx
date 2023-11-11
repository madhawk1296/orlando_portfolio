import { supabaseServerClient } from "@/clients/supabase";
import Items from "./Items";
import Remove from "./Remove";

export default async function Admin() {
    const supabase = supabaseServerClient(true)
    const { data: items, error} = await supabase.from("items").select()
    
    return <Remove items={items!} />
}