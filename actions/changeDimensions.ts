'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { Database } from "@/types/supabase";

export default async function changeDimensions(formdata: FormData): Promise<{error: string | null}> {  
    const id = formdata.get("id") as string
    const dimensions = formdata.get("dimensions") as string 
    const dimensionsArray = dimensions.split(",").map(dimension => Number(dimension))
    const supabase = supabaseServerClient();

    try {
        const { error } = await supabase.from("items").update({ dimensions: dimensions ? dimensionsArray : null }).eq('id', id)

        if(error) {
            console.log("message:", error.message)
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        return { error: e.message }
    }
}