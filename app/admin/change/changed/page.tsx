import Link from "next/link";
import Container from "../../manage/Container";
import openSans from "@/fonts/openSans";

export default function Changed() {
    return (
        <Container title="Changed Password">
            <h1 className="text-xl text-gray-800 tracking-wide">Your Password has successfully been changed.</h1>
            <Link href="/admin">
                <button className={`p-[10px] rounded-xl bg-gray-800 text-gray-50 shadow-md ${openSans.medium}`}>Back to Admin</button>
            </Link>
        </Container>
    )
}