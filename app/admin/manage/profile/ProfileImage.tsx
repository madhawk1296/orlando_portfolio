'use client'

import openSans from "@/fonts/openSans";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function ProfileImage({ file, changeFile, title, name, defaultValue }: { file: File | undefined, changeFile: (value: File) => void, title: string, name: string, defaultValue: string}) {
    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        changeFile(e.target.files![0])
    }

    return (
        <div className="w-full md:w-[800px] flex flex-col gap-2 md:justify-between">
            <h1 className={`text-xl ${openSans.medium} text-gray-800`}>{title}</h1>
            <div className="flex flex-col gap-2">
                <input onChange={handleFile} type="file" />
                <Image alt="New Image" width={300} height={300} src={file ? URL.createObjectURL(file) : `https://qvyfkvwrbfjgjhvedaco.supabase.co/storage/v1/object/public/profile/${defaultValue}`}  />
            </div>
        </div>
    )
}