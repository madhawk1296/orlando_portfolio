import { supabaseServerClient } from "@/clients/supabase";
import Container from "./Container";
import LogoutButton from "./LogoutButton";
import Items from "./Items";

export default async function Admin() {
    const supabase = supabaseServerClient(true)
    const { data: items, error} = await supabase.from("items").select()
    
    return (
        <Items items={items!} />
    )
}