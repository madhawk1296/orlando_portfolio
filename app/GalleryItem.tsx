import { GalleryItemType } from "@/data/gallery";
import openSans from "@/fonts/openSans";
import Image from "next/image";

export default function GalleryItem({ item }: { item: GalleryItemType}) {
    const { name, year, dimensions, section, mainImage } = item;

    return (
        <div className="relative w-full flex flex-col items-center gap-4">
            <div className="relative w-full aspect-square">
                <Image alt={`${name} Main Image`} src={`/gallery/${section}/${mainImage}`} fill={true} />
            </div>
            <h1 className={`text-xl text-gray-800 w-fit tracking-wide ${openSans.medium}`}>{name}</h1>
        </div>
    )
}