import Input from "@/app/Input";
import InputContainer from "@/app/InputContainer";
import Label from "@/app/Label";
import { supabaseServerClient } from "@/clients/supabase";
import openSans from "@/fonts/openSans";

export default function Login() {
    const supabase = supabaseServerClient()

    const attemptLogin = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password
        })
    }

    return (
        <div className="w-full h-full flex flex-col items-center pt-[100px] gap-10">
            <h1 className={`text-2xl tracking-wide text-gray-800 ${openSans.bold}`}>Login</h1>
            <form className="relative flex flex-col items-center gap-4 w-[500px]">
                <InputContainer>
                    <Label title="Email" secondary=" (required)" />
                    <Input name="email" placeholder="Your email" />
                </InputContainer>
                <InputContainer>
                    <Label title="Password" secondary=" (required)" />
                    <Input name="password" placeholder="Your password" />
                </InputContainer>
                <button className="w-full py-[10px] text-gray-50 tracking-wide text-lg bg-gray-800 rounded-lg shadow">Sign In</button>
            </form>
        </div>
    )
}