import { GalleryItemType } from "@/data/gallery";
import openSans from "@/fonts/openSans";
import { Tables } from "@/types/tables";
import Image from "next/image";
import Link from "next/link";

export default function GalleryItem({ item }: { item: Tables<"items">}) {
    const { id, name, year, dimensions, section, mainImage } = item;

    return (
        <Link href={`/art/${id}`} className="relative w-full flex flex-col items-center gap-4">
            <div className="relative w-full aspect-square">
                <Image alt={`${name} Main Image`} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${mainImage}`} fill={true} />
            </div>
            <h1 className={`text-xl text-gray-800 w-fit tracking-wide ${openSans.medium}`}>{name}</h1>
        </Link>
    )
}