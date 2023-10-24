'use client'

import gallery from "@/data/gallery";
import GalleryItem from "./GalleryItem";
import GalleryTab from "./GalleryTab";
import { useState } from "react";

export type SectionType = "paints" | "sculptures"

export default function Home() {
  const [section, setSection] = useState<SectionType>("paints");

  const changeSection = (value: SectionType) => {
    setSection(value)
  }

  const selectedGallery = gallery.filter(item => item.section == section)

  return (
    <main className="flex flex-col gap-10 px-[60px] pb-[50px]">
      <div className="w-full flex">
        <GalleryTab section="paints" title="Paints" selected={section == "paints"} changeSection={changeSection} />
        <GalleryTab section="sculptures" title="Sculptures" selected={section == "sculptures"} changeSection={changeSection} />
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {selectedGallery.map((galleryItem, index) => <GalleryItem key={index} item={galleryItem} />)}
      </div>
    </main>
  )
}
