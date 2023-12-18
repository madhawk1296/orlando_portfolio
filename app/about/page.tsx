import openSans from "@/fonts/openSans";
import Image from "next/image";
import Container from "../Container";
import { supabaseServerClient } from "@/clients/supabase";
import { Database } from "@/types/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function About() {
    const cookieStore = cookies()
    const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      })

    const { data: profiles, error } = await supabase.from("profile").select()
    const { name, subtitle, bio, profile_image } = profiles![0]

    return (
        <Container>
            <div className="">
                <Image alt="Profile Picture" src={`https://qvyfkvwrbfjgjhvedaco.supabase.co/storage/v1/object/public/profile/${profile_image}`} width={350} height={300} className="self-center rounded-lg mb-[50px]" />
            </div>
            <div className="flex flex-col gap-2 w-full px-[10px] md:max-w-[700px]" >
                <h1 className={`text-3xl ${openSans.bold} text-gray-800 `} >{name}</h1>
                <h1 className="text-xl text-gray-800 italic">{subtitle}</h1>
                <p className="whitespace-pre-line text-xl text-gray-800 pt-[20px]">{bio}</p>
            </div>
        </Container>
    )
}