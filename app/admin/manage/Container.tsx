import openSans from "@/fonts/openSans";
import { ReactNode } from "react";

export default function Container({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col items-center pt-[100px] gap-10 pb-[50px] px-[15px] md:px-[100px]">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.bold}`}>{title}</h1>
            {children}
        </div>
    )
}