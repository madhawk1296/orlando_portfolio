import openSans from "@/fonts/openSans";
import { SectionType } from "./page";
import Painting from "@/components/icons/Painting";
import Vase from "@/components/icons/Vase";
import Link from "next/link";

export default function GalleryTab({ section, title, selected }: { section: SectionType, title: string, selected: boolean}) {
    return (
        <Link className="w-full" href={section == "paints" ? "/" : "/?section=sculptures"}>
            <button className={`cursor-pointer w-full flex justify-center items-center gap-2 border-b-2 ${selected ? "border-gray-700 text-gray-800" : "border-gray-200 text-gray-400"} h-[60px] smooth ${openSans.medium}`}>
                <h1 className="text-xl tracking-wide">{title}</h1>
            </button>
        </Link>
    )
}