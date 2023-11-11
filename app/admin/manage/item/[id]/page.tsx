import { supabaseServerClient } from "@/clients/supabase";
import Container from "../../Container";
import openSans from "@/fonts/openSans";
import Image from "next/image";
import Name from "./Name";
import Year from "./Year";
import Dimensions from "./Dimensions";
import ArtImage from "./ArtImage";
import Images from "./Images";
import Description from "./Description";

export default async function Item({ params: { id }}: { params: { id: string }}) {
    const supabase = supabaseServerClient(true)
    const { data: items, error} = await supabase.from("items").select().eq("id", id)
    const { name, created_at, dimensions, images, mainImage, year, section, description } = items?.[0]!    

    return (
        <div className="relative w-full px-[20px] md:px-[0] md:w-[800px] flex flex-col gap-12">
            <div className="w-full flex flex-col gap-4">
                <Name id={id} name={name} />
                <Year id={id} year={year} />
                <Dimensions id={id} dimensions={dimensions} />
                <Description id={id} description={description}  />
            </div>
            <Images mainImage={mainImage!} id={id} images={images!} section={section} />
        </div>
    )
}