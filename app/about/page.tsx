import openSans from "@/fonts/openSans";
import Image from "next/image";
import Container from "../Container";

export default function About() {
    return (
        <Container>
            <div className="">
                <Image alt="Profile Picture" src="/profile.jpg" width={350} height={300} className="self-center rounded-lg mb-[50px]" />
            </div>
            <div className="flex flex-col gap-2 max-w-[700px]" >
                <h1 className={`text-3xl ${openSans.bold} text-gray-800 `} >Orlando Silva</h1>
                <h1 className="text-xl text-gray-800 italic">Born and raised in Panama City, Panama.</h1>
                <p className="whitespace-pre-line text-xl text-gray-800 pt-[20px]">{`Orlando studied Business Administration at Panama University.   Later on, he took Photography classes at Ganexa Art University in Panama City.  During that time, he learned the art of watching the World with a different perspective. 


In 2005, he journeyed to United States to begin a new chapter in life and was exactly the differences in culture and environment that made him experiment with new art medias.


Photography was his first pick but quicky evolve to different medias.
Today Orlando focusing on Mixed Media Acrylic Paints and Wire Mesh Wall Sculptures`}</p>
            </div>
        </Container>
    )
}