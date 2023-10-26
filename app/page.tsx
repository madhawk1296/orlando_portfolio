import gallery from "@/data/gallery";
import GalleryItem from "./GalleryItem";
import GalleryTab from "./GalleryTab";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SelectedItem from "./SelectedItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Gallery from "./Gallery";

export type SectionType = "paints" | "sculptures"

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies})
  const { data: items } = await supabase.from("items").select()
  
  return <Gallery gallery={items!} />
}
