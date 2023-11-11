import openSans from "@/fonts/openSans";
import Image from "next/image";

export default function ArtImage({index, section, image, isMain, changeMain, rearrangeImages }: { index: number, section: string, image: string, isMain: boolean, changeMain: (image: string) => void, rearrangeImages: (index: number, moveUp: boolean) => void}) {
    const moveUp = () => {
        rearrangeImages(index, true)
    }

    const moveDown = () => {
        rearrangeImages(index, false)
    }

    const handleMain = () => {
        changeMain(image)
    }

    return (
        <div className="flex flex-col h-full gap-2">
            {isMain ? (
                <h1 className={`text-xs underline p-[5px] ${openSans.medium}`}>Main image</h1>
            ) : (
                <button onClick={handleMain} className={`w-fit text-xs bg-blue-400 text-gray-50 rounded-xl p-[5px] shadow ${openSans.medium}`}>Set as Main</button>
            )}
            <Image className="border-2 rounded-lg" alt="Image" width={200} height={200} src={`${process.env.NEXT_PUBLIC_GALLERY_URL}/${section}/${image}`} />
            <div className="w-full flex items-center justify-center gap-7">
                <button onClick={moveUp} className="text-lg">⬅️</button>
                <button onClick={moveDown} className="text-lg">➡️</button>
            </div>
        </div>
    )
}