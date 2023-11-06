import openSans from "@/fonts/openSans";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import Options from "./Options";

export default function Nav() {
    return (
        <div className="w-full flex items-center justify-between">
            <Options />
            <LogoutButton />
        </div>
    )
}