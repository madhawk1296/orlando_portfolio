'use client'

import { useSearchParams } from "next/navigation";
import Container from "../../manage/Container";
import openSans from "@/fonts/openSans";

export default function Sent() {
    const searchParams = useSearchParams()
    const email = searchParams.get("email")
    return (
        <Container title="Reset" >
            <h1 className="text-xl text-gray-800 tracking-wide">A reset password link has been sent to your email at <span className={openSans.medium}>{email}</span></h1>
        </Container>
    )
}