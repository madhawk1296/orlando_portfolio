import { ReactNode } from "react";
import Header from "./Header";

export default function Container({ children }: { children: ReactNode}) {
    return (
        <div className="w-full h-full relative flex flex-col">
            <Header />
            <div className="self-center flex justify-between pt-[75px] w-full px-[100px]">
                {children}
            </div>
        </div>
        
    )
}