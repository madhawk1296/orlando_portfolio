'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { getUrl } from "@/tools/url";

export default async function sendReset(formdata: FormData): Promise<{error: string | null}> {   
    const email = formdata.get("email") as string 
    const supabase = supabaseServerClient();

    try {
        const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${getUrl()}/auth/callback?next=/admin/change`
        })

        console.log(data, error)

        if(error) {
            throw new Error(error.message)
        }

        return { error: null } 

    } catch(e: any) {
        console.log(e.message)
        return { error: e.message }
    }
}