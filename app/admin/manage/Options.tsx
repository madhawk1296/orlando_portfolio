'use client'

import openSans from "@/fonts/openSans";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Options() {
    const pathname = usePathname()
    const sections = pathname.split("/")
    const currentSection = sections[3] || "home"

    return currentSection == "home" ? (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <Link href="/admin/manage/add">
                    <button className={`border-2 rounded-xl shadow bg-gray-100 ${openSans.medium} px-[15px] py-[10px]`}>Add Item +</button>
                </Link>
                <Link href="/admin/manage/remove">
                    <button className={`border-2 border-red-200 rounded-xl shadow bg-red-100 ${openSans.medium} px-[15px] py-[10px]`}>Remove Items</button>
                </Link>
                <Link href="/admin/manage/profile">
                    <button className={`border-2 rounded-xl shadow bg-blue-100 border-blue-200 ${openSans.medium} px-[15px] py-[10px]`}>Change Profile</button>
                </Link>
            </div>
        </div>
    ) : (
        <div className="flex gap-4 items-center">
            <Link href="/admin/manage">
                <button className={`border-2 rounded-xl shadow bg-gray-100 ${openSans.medium} px-[15px] py-[10px]`}>⬅ Back to Gallery</button>
            </Link>
        </div>
    )
}