'use client'

import Container from "../manage/Container";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import Input from "@/app/Input";
import { useRouter } from "next/navigation";
import sendReset from "@/actions/sendReset";
import { useState } from "react";

export default function Reset() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const handleAction = async (formData: FormData) => {
        const email = formData.get("email") as string
        const { error: currentError } = await sendReset(formData)
        console.log(currentError)
        currentError ? setError(currentError) : router.replace(`/admin/reset/sent?email=${encodeURIComponent(email)}`);
    }

    console.log(error)

    return (
        <Container title="Reset" >
            <form action={handleAction} className="relative flex flex-col items-center gap-8 w-full md:w-[500px]">
                <InputContainer>
                    <Label title="Email" secondary=" (required)" />
                    <Input name="email" placeholder="Your email" />
                </InputContainer>
                <button className="w-full py-[10px] text-gray-50 tracking-wide text-lg bg-gray-800 rounded-lg shadow">Reset Password</button>
            </form>
            {error && <h1 className="text-xl tracking-wide text-red-500">{error}</h1>}
        </Container>
    )
}