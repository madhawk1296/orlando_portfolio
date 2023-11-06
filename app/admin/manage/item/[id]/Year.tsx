'use client'

import changeYear from "@/actions/changeYear"
import Pencil from "@/components/icons/Pencil"
import openSans from "@/fonts/openSans"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function Year({ id, year }: { id: string, year: number}) {
    const router = useRouter()
    const [newYear, setNewYear] = useState(year)
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewYear(Number(e.target.value))
    }

    const cancelChange = () => {
        setNewYear(year)
        toggleEditMode()
    }

    const handleAction = async (formData: FormData) => {
        const { error } = await changeYear(formData)
        console.log(error)
        router.refresh()
        toggleEditMode()
    }


    return editMode ? (
        <form action={handleAction} className="flex items-center gap-4">
            <input name="id" value={id} hidden readOnly />
            <input name="year" onChange={onChange} className={`text-2xl tracking-wide text-gray-800 ${openSans.medium} border-2 shadow rounded-lg w-fit outline-none`} value={newYear} />
            <button onClick={cancelChange} className="text-xl">
                ❌
            </button>
            <button type="submit" className="text-xl">
                ✅
            </button>
        </form>
    ) : (
        <div className="flex items-center gap-2">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.medium}`}>{year}</h1>
            <button onClick={toggleEditMode} className="relative h-[20px]">
                <Pencil />
            </button>
        </div>
    )
}