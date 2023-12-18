'use client'

import openSans from "@/fonts/openSans";
import Detail from "./Detail";
import ProfileImage from "./ProfileImage";
import { Tables } from "@/types/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import updateProfile from "@/actions/updateProfile";

export default function Profile({ profile }: { profile: Tables<"profile">}) {    
    const { name, subtitle, bio, profile_image } = profile
    const [file, setFile] = useState<File>();
    const [updateError, setUpdateError] = useState("")
    const router = useRouter()

    const changeFile = (value: File) => {
        setFile(value)
    }

    const handleAction = async (formData: FormData) => {
        console.log(file)
        if(file) {
            console.log(file)
            formData.append('image', file!);
        }

        const { error } = await updateProfile(formData)

        if(!error) {
            router.refresh()
            router.push("/admin/manage")
        } else {
            setUpdateError(error)
        }
    }
    
    return (
        <form action={handleAction} className="relative w-full flex flex-col gap-4 items-center">
            <Detail title="Name" name="name" defaultValue={name} />
            <Detail title="Subtitle" name="subtitle" defaultValue={subtitle!} />
            <Detail title="Bio" name="bio" textBox={true} defaultValue={bio!} />
            <ProfileImage file={file} changeFile={changeFile} title="Image" name="image" defaultValue={profile_image!} />
            <button className={`mt-[20px] bg-blue-500 text-gray-50 rounded-xl shadow-md py-[15px] px-[20px] ${openSans.medium}`}>Submit</button>
            {updateError && <h1 className="text-red-500 tracking-wide text-xl">{updateError}</h1>}
        </form>
    )
}