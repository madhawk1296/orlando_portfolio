'use client'

import { usePathname } from "next/navigation";
import Menu from "@/components/icons/Menu";
import { useEffect, useState } from "react";
import Cancel from "@/components/icons/Cancel";
import Tab from "./Tab";
import Link from "next/link";
import Image from "next/image";

export default function NavMobile() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    const page = (pathname.split("/")[1] || "gallery") as "gallery" | "about" | "contact";

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleOpen} className='h-[30px] w-[30px] flex justify-center items-center select-none outline-none'>    
                { isOpen ? <Cancel /> : <Menu />}        
            </button>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-white z-20 smoothe ${isOpen ? "opacity-100" :  "hidden opacity-0"} flex flex-col items-center justify-center gap-4`}>
                <div className="absolute top-0 right-[10px] h-[60px] flex items-center">
                    <button onClick={toggleOpen} className='h-[30px] w-[30px] flex justify-center items-center select-none outline-none z-20'>    
                        <Cancel />        
                    </button>
                </div>
                <Tab title="Gallery" link="/" selected={page == "gallery"} />
                <Tab title="About" link="/about" selected={page == "about"}  />
                <Tab title="Contact" link="/contact" selected={page == "contact"}  />
                <Link target="_blank" href="https://www.instagram.com/orlandosilva.art/" >
                    <Image alt="instagram" src="/instagram.png" width={30} height={30} />
                </Link>
            </div>
        </div>
    )
}