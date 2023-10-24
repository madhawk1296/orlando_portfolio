import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode}) {
    return (
        <div className="self-center flex justify-between pt-[75px] w-full px-[100px]">
            {children}
        </div>
    )
}