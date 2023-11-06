'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { Database } from "@/types/supabase";

export default async function changeName(formdata: FormData): Promise<{error: string | null}> {  
    const id = formdata.get("id") as string
    const name = formdata.get("name") as string 
    const supabase = supabaseServerClient();

    try {
        const { error } = await supabase.from("items").update({ name }).eq('id', id)

        if(error) {
            console.log("message:", error.message)
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        return { error: e.message }
    }
}