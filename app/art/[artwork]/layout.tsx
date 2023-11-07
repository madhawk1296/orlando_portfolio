import Header from "@/app/Header";
import Arrow from "@/components/icons/Arrow";
import openSans from "@/fonts/openSans";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="relative w-full flex flex-col px-[10px] md:px-[60px]">
                <Link href="/">
                    <button className={`text-xl tracking-wide text-gray-800 ${openSans.medium} flex items-center gap-2`}>
                        <div className="h-[30px] relative">
                            <Arrow />
                        </div>
                        Return to Gallery
                        </button>
                </Link>
                {children}
            </div>
        </div>
    )
}