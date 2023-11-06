'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function removeItems(formdata: FormData): Promise<{error: string | null}> {  
    const items = formdata.getAll("items") as string[]
    const supabase = supabaseServerClient();

    try {
        console.log("removing")
        items.forEach(async item => {
            const { data, error } = await supabase.from('items').delete().eq('id', Number(item))

            if(error) {
                throw new Error(error.message)
            }
        })
    } catch(e: any) {
        return {error: e.message}
    }

    return {error: null}
}