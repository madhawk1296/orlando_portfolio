'use client'

import Input from "@/app/Input";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import { supabaseServerClient } from "@/clients/supabase";
import openSans from "@/fonts/openSans";
import ResetPassword from "./ResetPassword";
import Container from "../manage/Container";
import { useRouter } from "next/navigation";
import login from "@/actions/login";
import { revalidatePath } from "next/cache";


export default function Login() {
    const router = useRouter()

    const handleAction = async (formData: FormData) => {
        const { error } = await login(formData)
        console.log(error)
        router.refresh()
    }

    return (
        <Container title="Login" >
            <form className="relative flex flex-col items-center gap-8 w-[500px]" action={handleAction} >
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
            </form>
        </Container>
    )
}