'use client'

import changeDescription from "@/actions/changeDescription"
import changeName from "@/actions/changeName"
import Pencil from "@/components/icons/Pencil"
import openSans from "@/fonts/openSans"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function Description({ id, description }: { id: string, description: string | null}) {
    const router = useRouter()
    const [newDescription, setNewDescription] = useState(description)
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewDescription(e.target.value)
    }

    const cancelChange = () => {
        setNewDescription(description)
        toggleEditMode()
    }

    const handleAction = async (formData: FormData) => {
        const { error } = await changeDescription(formData)
        router.refresh()
        toggleEditMode()
    }


    return editMode ? (
        <form action={handleAction} className="flex items-center gap-4">
            <input name="id" value={id} hidden readOnly />
            <textarea name="description" onChange={onChange} className={`p-[10px] text-xl tracking-wide text-gray-800 ${openSans.medium} border-2 shadow rounded-lg w-fit outline-none`} value={newDescription || ""} />
            <button onClick={cancelChange} className="text-xl">
                ❌
            </button>
            <button type="submit" className="text-xl">
                ✅
            </button>
        </form>
    ) : (
        <div className="flex items-center gap-2 mt-[20px] ">
            <h1 className={`text-2xl tracking-wide text-gray-800 whitespace-pre-line ${openSans.medium}`}>{description || "Add Description"}</h1>
            <button onClick={toggleEditMode} className="relative h-[20px]">
                <Pencil />
            </button>
        </div>
    )
}