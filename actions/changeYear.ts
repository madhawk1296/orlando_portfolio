'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function changeYear(formdata: FormData): Promise<{error: string | null}> {  
    const id = formdata.get("id") as string
    const year = Number(formdata.get("year") as string) 
    const supabase = supabaseServerClient();

    try {
        const { error } = await supabase.from("items").update({ year }).eq('id', id)

        if(error) {
            console.log("message:", error.message)
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        return { error: e.message }
    }
}