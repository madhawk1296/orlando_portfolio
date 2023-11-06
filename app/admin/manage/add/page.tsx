'use client'

import Input from "@/app/Input";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import openSans from "@/fonts/openSans";
import Section from "./Section";
import Images from "./Images";
import { ChangeEvent, useState } from "react";
import addItem from "@/actions/addItem";
import { useRouter } from "next/navigation";

export default function Add() {
    const router = useRouter()
    const [files, setFiles] = useState<File[]>([]);
    const isDisabled = !(files.length > 0)

    const onFileUpload = (files: File[]) => {
        setFiles(files);
    };

    const handleAction = async (formData: FormData) => {
        files.forEach((file) => {
            formData.append('images', file);
        });

        const { error } = await addItem(formData)

        if(!error) {
            router.push("/admin/manage")
        }
    }

    return (
        <form className="relative w-[800px] flex flex-col gap-5" action={handleAction} >
            <InputContainer>
                <Label title="Name" />
                <Input name="name" placeholder="Portrait" />
            </InputContainer>
            <InputContainer>
                <Label title="Year" />
                <Input isNumber={true} name="year" placeholder="2023" />
            </InputContainer>
            <InputContainer>
                <Label title="Dimensions" secondary=" - comma separated" />
                <Input name="dimensions" placeholder="48,48,1.5" />
            </InputContainer>
            <InputContainer>
                <Label title="Section" />
                <Section />
            </InputContainer>
            <InputContainer>
                <Label title="Images" />
                <Images files={files} onFileUpload={onFileUpload}  />
            </InputContainer>
            <button disabled={isDisabled} className={`disabled:bg-blue-300 px-[15px] py-[10px] rounded-xl bg-blue-500 text-gray-50 ${openSans.medium} tracking-wide text-lg`}>Add Artwork</button>
        </form>
    )
}