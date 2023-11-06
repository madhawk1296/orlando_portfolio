'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { cookies } from 'next/headers'

export default async function logout(): Promise<{error: string | null}> {    
    const supabase = supabaseServerClient();

    try {
        const { error } = await supabase.auth.signOut()

        if(error) {
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        return { error: e }
    }
}