import { ReactNode } from "react";
import Header from "./Header";

export default function Container({ children }: { children: ReactNode}) {
    return (
        <div className="w-full h-full relative flex flex-col pb-[50px]">
            <Header />
            <div className="self-center flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 pt-[75px] w-full px-[10px] md:px-[100px]">
                {children}
            </div>
        </div>
        
    )
}