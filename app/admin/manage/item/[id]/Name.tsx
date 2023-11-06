'use client'

import changeName from "@/actions/changeName"
import Pencil from "@/components/icons/Pencil"
import openSans from "@/fonts/openSans"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function Name({ id, name }: { id: string, name: string}) {
    const router = useRouter()
    const [newName, setNewName] = useState(name)
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const cancelChange = () => {
        setNewName(name)
        toggleEditMode()
    }

    const handleAction = async (formData: FormData) => {
        const { error } = await changeName(formData)
        console.log(error)
        router.refresh()
        toggleEditMode()
    }


    return editMode ? (
        <form action={handleAction} className="flex items-center gap-4">
            <input name="id" value={id} hidden readOnly />
            <input name="name" onChange={onChange} className={`text-2xl tracking-wide text-gray-800 ${openSans.medium} border-2 shadow rounded-lg w-fit outline-none`} value={newName} />
            <button onClick={cancelChange} className="text-xl">
                ❌
            </button>
            <button type="submit" className="text-xl">
                ✅
            </button>
        </form>
    ) : (
        <div className="flex items-center gap-2">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.medium}`}>{name}</h1>
            <button onClick={toggleEditMode} className="relative h-[20px]">
                <Pencil />
            </button>
        </div>
    )
}