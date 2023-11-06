'use client'

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function Images({ files, onFileUpload }: { files: File[], onFileUpload: (files: File[]) => void }) {
    const [mainImage, setMainImage] = useState<number>(0)

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
      onFileUpload(Array.from(e.target.files!));
    };

    return (
        <div className="flex flex-col gap-3">
            <input  multiple type="file" onChange={handleFileInput} accept="image/png, image/jpeg, image/gif" />
            {files.length > 0 && <h1 className="text-xl tracking-wide text-gray-800">Click on the image you want as the main image.</h1>}
            <div className="flex items-center gap-4 flex-wrap">
                {files.map((file, index) => (
                    <button type="button" onClick={() => setMainImage(index)} key={index} className="flex flex-col h-full">
                        <Image className="" alt="choose file" width={150} height={150} src={URL.createObjectURL(file)}  />
                        {index == mainImage && (
                            <div className="h-[30px] w-full bg-red-100 flex items-center justify-center rounded-b-lg">
                                <h1 className="text-lg w-fit">Main Image</h1>
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <input readOnly hidden name="main_image" value={mainImage} />
        </div>
    )
}