'use client'

import logout from "@/actions/logout";
import { useRouter } from "next/navigation";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import Input from "@/app/Input";
import Container from "../manage/Container";
import changePassword from "@/actions/changePassword";
import { useState } from "react";
import Button from "../Button";

export default function Admin() {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const passwordMismatch = password != confirmPassword
    const isDisabled = password.length < 6 || passwordMismatch

    const handleAction = async (formData: FormData) => {
        const { error } = await changePassword(formData)
        if(!error) {
            router.replace("/admin/change/changed")
        }
    }

    const onPasswordChange = (value: string) => {
        setPassword(value)
    }

    const onConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value)
    }


    return (
        <Container title="Change Password">
            <form className="relative flex flex-col items-center gap-8 w-[500px]" action={handleAction} >
                <InputContainer>
                    <Label title="New Password" secondary=" (required)" />
                    <Input value={password} isPassword={true} onChange={onPasswordChange} name="password" placeholder="Password" />
                </InputContainer>
                <InputContainer>
                    <Label title="Confirm Password" secondary=" (required)" />
                    <Input value={confirmPassword} onChange={onConfirmPasswordChange} isPassword={true} name="confirm_password" placeholder="Confirm password" />
                </InputContainer>
                {passwordMismatch && <h1 className="text-lg text-red-500 tracking-wide">Passwords don't match</h1>}
                <Button disabled={isDisabled} title="Change Password" />
            </form>
        </Container>
    )
}