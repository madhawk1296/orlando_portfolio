import openSans from "@/fonts/openSans";
import { SectionType } from "./page";
import Painting from "@/components/icons/Painting";
import Vase from "@/components/icons/Vase";

export default function GalleryTab({ section, title, selected, changeSection }: { section: SectionType, title: string, selected: boolean, changeSection: (value: SectionType) => void}) {
    const handleClick = () => {
        changeSection(section)
    }

    return (
        <button onClick={handleClick} className={`cursor-pointer w-full flex justify-center items-center gap-2 border-b-2 ${selected ? "border-gray-700 text-gray-800" : "border-gray-200 text-gray-400"} h-[60px] smooth ${openSans.medium}`}>
            <h1 className="text-xl tracking-wide">{title}</h1>
        </button>
    )
}