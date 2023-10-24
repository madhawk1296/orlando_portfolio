'use client'

import { usePathname } from "next/navigation";
import Tab from "./Tab";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const pathname = usePathname();
    const page = (pathname.split("/")[1] || "gallery") as "gallery" | "about" | "contact";

    return (
        <div className='flex items-center gap-7'>
            <Tab title="Gallery" link="/" selected={page == "gallery"} />
            <Tab title="About" link="/about" selected={page == "about"}  />
            <Tab title="Contact" link="/contact" selected={page == "contact"}  />
            <Link target="_blank" href="https://www.instagram.com/orlandosilva.art/" >
                <Image alt="instagram" src="/instagram.png" width={30} height={30} />
            </Link>
        </div>
    )
}