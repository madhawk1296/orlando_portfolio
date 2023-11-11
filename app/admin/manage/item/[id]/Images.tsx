'use client'

import openSans from "@/fonts/openSans";
import ArtImage from "./ArtImage";
import { useState } from "react";
import { arraysAreEqual } from "@/tools/compare";
import changeImages from "@/actions/changeImages";
import { useRouter } from "next/navigation";
import changeMainImage from "@/actions/changeMainImage";


export default function Images({ id, mainImage, images, section }: { id: string, mainImage: string, images: string[], section: string}) {
    const router = useRouter()
    const [currentImages, setCurrentImages] = useState(images);
    const orderChanged = !arraysAreEqual(images, currentImages)

    const rearrangeImages = (index: number, moveUp: boolean) => {
        let newImages = [...currentImages];

        let newIndex = moveUp ? index - 1 : index + 1;

        if (newIndex >= 0 && newIndex < newImages.length) {
            [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];

            setCurrentImages(newImages);
        }
    }

    const cancelRearrange = () => {
        setCurrentImages(images)
    }

    const saveRearrange = async () => {
        const formData = new FormData
        formData.append("id", id)

        currentImages.forEach(image => {
            formData.append("images", image)
        })

        const { error } = await changeImages(formData)
        if (!error) router.refresh()
    }

    const changeMain = async (image: string) => {
        const { error } = await changeMainImage(id, image)
        if (!error) router.refresh()
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.medium}`}>Images</h1>
            <div className="flex flex-wrap gap-4">
                {currentImages?.map((image, index) => <ArtImage isMain={image == mainImage} changeMain={changeMain} key={index} index={index} rearrangeImages={rearrangeImages} image={image} section={section} />)}
            </div>
            {orderChanged && (
                <div className="flex items-center gap-4">
                    <button onClick={cancelRearrange} className={`p-[10px] rounded-xl shadow bg-gray-100 ${openSans.medium}`}>Cancel</button>
                    <button onClick={saveRearrange} className={`p-[10px] rounded-xl shadow bg-blue-500 text-gray-50 ${openSans.medium}`}>Save Order</button>
                </div>

            )}
        </div>
    )
}