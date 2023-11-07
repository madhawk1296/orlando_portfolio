'use client'

import useMobile from "@/components/hooks/useMobile";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Nav() {
    const isSmallScreen = useMobile()

    return isSmallScreen ? <NavMobile /> : <NavDesktop /> 
}