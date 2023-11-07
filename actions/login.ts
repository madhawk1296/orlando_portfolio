'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function login(formdata: FormData): Promise<{error: string | null}> {
    const email = formdata.get("email") as string
    const password = formdata.get("password") as string
    
    const supabase = supabaseServerClient();

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if(error) {
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        return { error: e }
    }
}