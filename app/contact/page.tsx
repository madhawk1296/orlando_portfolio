import openSans from "@/fonts/openSans";
import Container from "../Container";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";
import Label from "../Label";
import Input from "../Input";
import InputContainer from "../InputContainer";

export default function Contact() {
    return (
        <Container>
            <div className="flex flex-col gap-8 md:gap-14 w-full">
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
            <div className="flex flex-col gap-8 w-full md:w-[660px]">
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
                    <Input name="message" />
                </InputContainer>
                <button className={` py-[10px] bg-gray-800 text-gray-50 ${openSans.medium} tracking-wide rounded-lg shadow`}>Submit</button>
            </div>
        </Container>
    )
}