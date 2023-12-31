import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
    return (
        <div className='w-full h-[60px] md:h-[120px] flex items-center justify-between px-[10px] md:px-[60px]'>
          <Link href="/" >
            <button className='w-fit text-2xl md:text-4xl font-medium tracking-wide text-gray-900'>Orlando Silva</button>
          </Link>
          <Nav />
        </div>
    )
}