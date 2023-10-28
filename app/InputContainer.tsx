import { ReactNode } from "react";
import Label from "./Label";

export default function InputContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-4">
            {children}
        </div>
    )
}