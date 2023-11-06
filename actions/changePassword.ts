'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function changePassword(formdata: FormData): Promise<{error: string | null}> {   
    const password = formdata.get("password") as string 
    const supabase = supabaseServerClient();

    try {
        const { error, data} = await supabase.auth.updateUser({ password })

        if(error) {
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        console.log(e.message)
        return { error: e.message }
    }
}