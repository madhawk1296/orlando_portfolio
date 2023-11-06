'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function addItem(formdata: FormData): Promise<{error: string | null}> {  
    const name = formdata.get("name") as string 
    const year = Number(formdata.get("year") as string) 
    const dimensions = formdata.get("dimensions") as string 
    const dimensionsArray = dimensions.split(",").map(dimension => Number(dimension))
    const section = formdata.get("section") as "paints" | "sculptures" 
    const images = formdata.getAll("images") as File[]
    const mainImage = Number(formdata.get("main_image") as string)
    const imageNames = images.map((image, index) => {
        const ext = image.type.split("/")[1]
        return `${encodeURIComponent(name)}-${index + 1}-${year}.${ext}`
    })

    const supabase = supabaseServerClient();

    try {
        images.forEach(async (image, index) => {
            const { data, error } = await supabase.storage.from('gallery').upload(`${section}/${imageNames[index]}`, image, {
                cacheControl: '3600',
                upsert: true
            })

            if(error) {
                throw new Error(error.message)
            }
        })

        const { error } = await supabase.from("items").insert({
            name,
            year,
            dimensions: dimensions ? dimensionsArray : null,
            section,
            images: imageNames,
            mainImage: imageNames[mainImage]
        })

        if(error) {
            throw new Error(error.message)
        }
    } catch(e: any) {
        console.log(e)
        return {error: e.message}
    }

    // insert into table

    return {error: null}
}