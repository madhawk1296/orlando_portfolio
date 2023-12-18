'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function updateProfile(formdata: FormData): Promise<{error: string | null}> {  
    const name = formdata.get("name") as string 
    const subtitle = formdata.get("subtitle") as string
    const bio = formdata.get("bio") as string 
    const image = formdata.get("image") as File

    const supabase = supabaseServerClient();

    try {
        if(image) {
            const { data, error: uploadError } = await supabase.storage.from('profile').upload(`profile.jpg`, image, {
                    cacheControl: '3600',
                    upsert: true
            })

            if(uploadError) {
                throw new Error(uploadError.message)
            }
        }


        const { error } = await supabase.from("profile").update({
            name,
            subtitle,
            bio,
        }).eq("id", 1)

        if(error) {
            throw new Error(error.message)
        }

    } catch(e: any) {
        console.log(e)
        return {error: e.message}
    }

    return {error: null}
}