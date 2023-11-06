import { Tables } from "@/types/tables";
import Image from "next/image";

export default function RemoveItem({ item }: { item: Tables<"items"> }) {
    const { id, name, mainImage, section } = item
    return (
        <div className="h-fit border-2 flex flex-col gap-2 items-center px-[15px] py-[10px] rounded-xl ">
            <Image alt="Remove Item" className="w-[100px h-[100px]" width={100} height={100} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${mainImage}`} />
            <h1 className="w-full text-sm text-gray-800 truncate">{name}</h1>
        </div>
    )
}