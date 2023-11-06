import TrashCan from "@/components/icons/TrashCan";
import { Tables } from "@/types/tables";
import Image from "next/image";
import Link from "next/link";

export default function Item({ item, addRemoveItem }: { item: Tables<"items">, addRemoveItem: (item: Tables<"items">) => void }) {
    const { created_at, dimensions, id, images, mainImage, name, section, year  } = item

    const handleClick = () => {
        addRemoveItem(item)
    }

    return (
        <div className="relative flex flex-col items-center gap-2 shadow px-[10px] pb-[20px] rounded-xl">
            <button onClick={handleClick} className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[40px] h-[40px] rounded-full border-red-300 bg-red-100 border-2 py-[5px] flex items-center justify-center">
                <TrashCan />
            </button>
            <div className="h-full">
                <Image alt="Edit Image" className="object-fit" width={200} height={200} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${mainImage}`} />
            </div>
            <h1 className="justify-self-end text-xl tracking-wide text-gray-800 ">{name}</h1>
        </div>
    )
}