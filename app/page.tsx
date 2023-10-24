'use client'

import gallery from "@/data/gallery";
import GalleryItem from "./GalleryItem";
import GalleryTab from "./GalleryTab";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export type SectionType = "paints" | "sculptures"

export default function Home() {
  const searchParams = useSearchParams()
  const section = (searchParams.get("section") || "paints") as SectionType
  const selectedGallery = gallery.filter(item => item.section == section)

  return (
    <main className="flex flex-col gap-10 px-[60px] pb-[50px]">
      <div className="w-full flex">
        <GalleryTab section="paints" title="Paints" selected={section == "paints"} />
        <GalleryTab section="sculptures" title="Sculptures" selected={section == "sculptures"} />
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {selectedGallery.map((galleryItem, index) => <GalleryItem key={index} item={galleryItem} />)}
      </div>
    </main>
  )
}
