'use client'

import Items from "./Items";
import { Tables } from "@/types/tables";
import { useState } from "react";
import RemoveItem from "./RemoveItem";
import removeItems from "@/actions/removeItems";
import { useRouter } from "next/navigation";

export default function Remove({ items }: { items: Tables<"items">[]}) {
    const router = useRouter()
    const [itemsToRemove, setItemsToRemove] = useState<Tables<"items">[]>([])

    const addRemoveItem = (item: Tables<"items">) => {
        const existingItem = itemsToRemove.find(cur => cur.id == item.id)

        if(!existingItem) setItemsToRemove(prevItems => [...prevItems, item])
    }

    const cancelRemoval = () => {
        setItemsToRemove([])
    }

    const handleRemove = async () => {
        const formData = new FormData

        itemsToRemove.forEach(item => {
            formData.append("items", String(item.id))
        })

        const { error } = await removeItems(formData)

        if(!error) {
            router.push("/admin/manage")
        }

    }

    return (
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-xl tracking-wide text-gray-800">Choose the Items you want to delete.</h1>
            {itemsToRemove.length > 0  && (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        {itemsToRemove.map((item, index) => <RemoveItem item={item} />)}
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={cancelRemoval} className="px-[15px] py-[10px] rounded-xl border-2 shadow bg-gray-100">Cancel</button>
                        <button onClick={handleRemove} className="px-[15px] py-[10px] rounded-xl border-2 border-red-200 shadow bg-red-100">Remove Items</button>
                    </div>
                </div>
            )}
            <Items addRemoveItem={addRemoveItem} items={items!} />
        </div>
    )
}