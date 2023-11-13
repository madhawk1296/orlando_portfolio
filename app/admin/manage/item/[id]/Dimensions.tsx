'use client'

import changeDimensions from "@/actions/changeDimensions"
import changeName from "@/actions/changeName"
import Pencil from "@/components/icons/Pencil"
import openSans from "@/fonts/openSans"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function Dimensions({ id, dimensions }: { id: string, dimensions: number[] | null }) {
    const router = useRouter()
    const [newDimensions, setNewDimensions] = useState(dimensions)
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.split(",").map(val => Number(val))
        setNewDimensions(value)
    }

    const cancelChange = () => {
        setNewDimensions(dimensions)
        toggleEditMode()
    }

    const handleAction = async (formData: FormData) => {
        const { error } = await changeDimensions(formData)
        console.log(error)
        router.refresh()
        toggleEditMode()
    }


    return editMode ? (
        <form action={handleAction} className="flex items-center gap-4">
            <input name="id" value={id} hidden readOnly />
            <input name="dimensions" onChange={onChange} placeholder="50,50,1.5" className={`text-2xl tracking-wide text-gray-800 ${openSans.medium} border-2 shadow rounded-lg w-fit outline-none`} value={newDimensions?.join(",")} />
            <button onClick={cancelChange} className="text-xl">
                ❌
            </button>
            <button type="submit" className="text-xl">
                ✅
            </button>
        </form>
    ) : (
        <div className="flex items-center gap-2">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.medium}`}>{dimensions ? `${dimensions[0]} X ${dimensions[1]}${dimensions[2] ? ` X ${dimensions[2]}` : ''} inches` : "Add dimensions"}</h1>
            <button onClick={toggleEditMode} className="relative h-[20px]">
                <Pencil />
            </button>
        </div>
    )
}