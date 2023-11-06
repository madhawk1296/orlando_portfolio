import { Tables } from "@/types/tables";
import Image from "next/image";
import Link from "next/link";

export default function Item({ item }: { item: Tables<"items"> }) {
    const { created_at, dimensions, id, images, mainImage, name, section, year  } = item

    return (
        <Link href={`/admin/manage/item/${id}`} className="flex flex-col items-center gap-2 shadow px-[10px] pb-[20px] rounded-xl">
            <div className="h-full">
                <Image alt="Edit Image" className="object-fit" width={200} height={200} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${mainImage}`} />
            </div>
            <h1 className="justify-self-end text-xl tracking-wide text-gray-800 ">{name}</h1>
        </Link>
    )
}