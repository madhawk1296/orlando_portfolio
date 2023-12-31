import Image from "next/image";
import { SectionType } from "../../page";

export default function ArtImage({ section, image }: { section: SectionType, image: string }) {
    console.log()
    return (
        <div className="relative w-full aspect-square md:h-[650px]">
            <Image alt="Artwork Image" src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${image}`} fill={true} className="object-contain" />
        </div>
    )
}