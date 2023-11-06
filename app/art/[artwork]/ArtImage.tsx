import Image from "next/image";
import { SectionType } from "../../page";

export default function ArtImage({ section, image }: { section: SectionType, image: string }) {
    return (
        <div className="relative w-full h-[650px]">
            <Image alt="Artwork Image" src={`/gallery/${section}/${image}`} fill={true} className="object-contain" />
        </div>
    )
}