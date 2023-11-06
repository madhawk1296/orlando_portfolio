'use client'

import logout from "@/actions/logout"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
    const router = useRouter()

    const handleAction = async () => {
        const { error } = await logout()
        router.refresh()
    }

    return (
        <form className="w-fit " action={handleAction} >
            <button type="submit" className="self-end p-[10px] rounded-lg border-2 border-red-400 shadow text-red-500">Logout</button>
        </form>
    )
}