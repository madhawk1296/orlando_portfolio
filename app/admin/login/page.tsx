'use client'

import Input from "@/app/Input";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import ResetPassword from "./ResetPassword";
import Container from "../manage/Container";
import { useRouter } from "next/navigation";
import login from "@/actions/login";
import { useState } from "react";


export default function Login() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const handleAction = async (formData: FormData) => {
        const { error } = await login(formData)
        error ? setError(error) : router.refresh()
    }

    return (
        <Container title="Login" >
            <form className="relative flex flex-col items-center gap-8 w-full md:w-[500px]" action={handleAction} >
                <InputContainer>
                    <Label title="Email" secondary=" (required)" />
                    <Input name="email" placeholder="Your email" />
                </InputContainer>
                <InputContainer>
                    <Label title="Password" secondary=" (required)" />
                    <Input isPassword={true} name="password" placeholder="Your password" />
                </InputContainer>
                <ResetPassword />
                <button className="w-full py-[10px] text-gray-50 tracking-wide text-lg bg-gray-800 rounded-lg shadow">Sign In</button>
                {error && <h1 className="w-fit text-red-400 text-lg tracking-wide">{error}</h1>}
            </form>
        </Container>
    )
}