import gallery, { GalleryItemType } from "@/data/gallery";
import Image from "next/image";
import { useEffect } from "react";

export default function SelectedItem({ selected }: { selected: string}) {
    const { name, year, mainImage, section } = gallery.find(item => item.name == selected)!

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
        
        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    console.log(`/gallery/${section}/${mainImage}`)

    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <div className="fixed w-screen h-screen bg-black opacity-60" />
            <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] " >
                <Image className="object-contain" alt="Selected Image" src={`/gallery/${section}/${mainImage}`} fill={true}  />
            </div>
        </div>
    )
}