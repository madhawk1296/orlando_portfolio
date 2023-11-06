import Link from "next/link";

export default function ResetPassword() {
    return (
        <Link className="self-start" href="/admin/reset">
            <h1 className="text-xl text-gray-800 underline ">Forgot Password</h1>
        </Link>
    )
}