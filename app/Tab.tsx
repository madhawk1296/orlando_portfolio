import openSans from "@/fonts/openSans";
import Link from "next/link";

export default function Tab({ title, link, selected=false }: { title: string, link: string, selected?: boolean}) {
    return (
        <Link href={link} >
            <button className={`w-fit text-gray-900 text-2xl md:text-xl tracking-wide smoothe ${openSans.light} border-b-2 smooth ${selected ? "border-gray-800 " : "border-transparent"}`}>{title}</button>
        </Link>
    )
}