import gallery from "@/data/gallery";
import openSans from "@/fonts/openSans";
import ArtImage from "./ArtImage";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import { SectionType } from "../../page";
import { createServerClient } from "@supabase/ssr";

export default async function Artwork({ params: { artwork }}: { params: { artwork: string }}) {
    const cookieStore = cookies()
    const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    })
    
    const { data: items } = await supabase.from("items").select().eq("id", artwork)
    const { name, year, mainImage, section, dimensions, images } = items?.[0]!

    return (
        <div className="relative w-full flex flex-col py-[60px] gap-8">
            <div className="relative flex flex-col gap-1.5">
                <h1 className={`text-4xl tracking-wide text-gray-800 ${openSans.bold}`}>{name}</h1>
                <h1 className="text-2xl text-gray-600 tracking-wide">Year: {year}</h1>
                {dimensions && <h1 className="text-2xl text-gray-600 tracking-wide">Dimensions: {dimensions[0]} x {dimensions[1]}{dimensions[2] && ` x ${dimensions[2]}`}</h1>}
            </div>
            <div className="relative w-full flex flex-col gap-6 items-center">
                {images!.map((image, index) => <ArtImage key={index} section={section as SectionType} image={image} />)}
            </div>
        </div>
    )
}