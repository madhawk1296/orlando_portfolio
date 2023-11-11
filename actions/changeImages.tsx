'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function changeImages(formdata: FormData): Promise<{error: string | null}> {  
    const id = formdata.get("id") as string
    const images = formdata.getAll("images") as string[]
    const supabase = supabaseServerClient();

    console.log(id, images)

    try {
        const { error } = await supabase.from("items").update({ images }).eq('id', id)

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