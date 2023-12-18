import { supabaseServerClient } from "@/clients/supabase";
import Profile from "./Profile";

export default async function Page() {   
    const supabase = supabaseServerClient()
    const { data: profiles, error } = await supabase.from("profile").select()
    
    return (
        <Profile profile={profiles![0]} />
    )
}