'use client' 

import { useSearchParams } from "next/navigation";
import GalleryTab from "./GalleryTab";
import { SectionType } from "./page";
import { Tables } from "@/types/tables";
import GalleryItem from "./GalleryItem";
import Header from "./Header";

export default function Gallery({ gallery }: { gallery: Tables<"items">[] } ) {
    const searchParams = useSearchParams()
    const section = (searchParams.get("section") || "paints") as SectionType 
    const selectedGallery = gallery.filter(item => item.section == section).sort((a,b) => b.year - a.year)

    return (
        <main className="flex flex-col">
            <Header />
            <div className="flex flex-col gap-10 md:px-[60px] pb-[50px] ">
                <div className="w-full flex sticky top-0 z-10 bg-white">
                    <GalleryTab section="paints" title="Paints" selected={section == "paints"} />
                    <GalleryTab section="sculptures" title="Sculptures" selected={section == "sculptures"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-[20px] md:px-[0px]">
                    {selectedGallery.map((galleryItem, index) => <GalleryItem key={index} item={galleryItem} />)}
                </div>
            </div>
        </main>
    )
}