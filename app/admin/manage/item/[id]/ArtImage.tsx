import Image from "next/image";

export default function ArtImage({ section, image }: { section: string, image: string}) {
    return (
        <Image className="border-2 rounded-lg" alt="Image" width={200} height={200} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${image}`} />
    )
}