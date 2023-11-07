import { supabaseServerClient } from "@/clients/supabase";
import Container from "../../Container";
import openSans from "@/fonts/openSans";
import Image from "next/image";
import Name from "./Name";
import Year from "./Year";
import Dimensions from "./Dimensions";

export default async function Item({ params: { id }}: { params: { id: string }}) {
    const supabase = supabaseServerClient()
    const { data: items, error} = await supabase.from("items").select().eq("id", id)
    const { name, created_at, dimensions, images, mainImage, year, section} = items?.[0]!    

    return (
        <div className="relative w-full px-[20px] md:px-[0] md:w-[800px] flex flex-col gap-12">
            <div className="w-full flex flex-col gap-4">
                <Name id={id} name={name} />
                <Year id={id} year={year} />
                <Dimensions id={id} dimensions={dimensions} />
            </div>
            <div className="w-full flex flex-col gap-3">
                <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.medium}`}>Images</h1>
                <div className="flex flex-wrap gap-4">
                    {images?.map((image, index) => <Image className="border-2 rounded-lg" alt="Image" width={200} height={200} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${image}`} />)}
                </div>
            </div>
        </div>
    )
}