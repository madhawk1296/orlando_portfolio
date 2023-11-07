'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { getUrl } from "@/tools/url";

export default async function sendReset(formdata: FormData): Promise<{error: string | null}> {   
    const email = formdata.get("email") as string 
    const supabase = supabaseServerClient();

    try {
        console.log(`${getUrl()}/auth/callback?next=/admin/change`)
        /*
        const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${getUrl()}/auth/callback?next=/admin/change`
        })

        if(error) {
            throw new Error(error.message)
        }
        */

        return { error: `${getUrl()}/auth/callback?next=/admin/change` } 

    } catch(e: any) {
        console.log(e.message)
        return { error: e.message }
    }
}