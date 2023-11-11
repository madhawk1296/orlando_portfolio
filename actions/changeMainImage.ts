'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function changeMainImage(id: string, image: string): Promise<{error: string | null}> {  
    const supabase = supabaseServerClient();

    try {
        const { error } = await supabase.from("items").update({ mainImage: image }).eq('id', id)

        if(error) {
            console.log("message:", error.message)
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        console.log(e)
        return { error: e.message }
    }
}