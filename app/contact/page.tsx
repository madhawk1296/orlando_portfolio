'use client'

import openSans from "@/fonts/openSans";
import Container from "../Container";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";
import Label from "../Label";
import Input from "../Input";
import InputContainer from "../InputContainer";
import contact from "@/actions/contact";
import { useState } from "react";

export default function Contact() {
    const [response, setResponse] = useState<string | null>(null)

    const handleAction = async (formData: FormData) => {
        const { error } = await contact(formData)

        if (error) {
            setResponse(error)
        } else {
            setResponse("Email Sent")
        }
    }

    return (
        <Container>
            <div className="flex flex-col gap-8 md:gap-14 w-full md:w-fit">
                <h1 className={`w-fit text-4xl tracking-wider text-gray-900 ${openSans.bold}`}>Let's Connect</h1>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <ContactInfo content="Orlando Silva" />
                        <ContactInfo content="Phoenix, AZ, USA" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <ContactInfo content="orlandosilva.art@hotmail.com" />
                    </div>
                    <Link target="_blank" href="https://www.instagram.com/orlandosilva.art/" >
                        <Image alt="instagram" src="/instagram.png" width={30} height={30} />
                    </Link>
                </div>
            </div>
            <form className="flex flex-col gap-8 w-full md:w-[660px]" action={handleAction}>
                <InputContainer>
                    <Label title="Name" secondary=" (required)" />
                    <Input name="name" placeholder="Your name" />
                </InputContainer>
                <InputContainer>
                    <Label title="Email" secondary=" (required)" />
                    <Input name="email" placeholder="your.email@example.com" />
                </InputContainer>
                <InputContainer>
                    <Label title="Message" secondary=" (required)" />
                    <textarea required name="message" className="w-full h-[160px] p-[15px] outline-none border-2 rounded-lg shadow text-lg placeholder:text-gray-400 focus:border-gray-500 smoothe" />
                </InputContainer>
                <button className={` py-[10px] bg-gray-800 text-gray-50 ${openSans.medium} tracking-wide rounded-lg shadow`}>Submit</button>
                {response && <h1 className="text-xl tracking-wide text-gray-800">{response}</h1>}
            </form>
        </Container>
    )
}