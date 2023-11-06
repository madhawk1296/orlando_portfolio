import { supabaseServerClient } from "@/clients/supabase";
import Container from "./Container";
import LogoutButton from "./LogoutButton";
import Items from "./Items";
import { ReactNode } from "react";
import Nav from "./Nav";

export default async function Admin({ children }: {children: ReactNode}) {    
    return (
        <Container title="Admin">
            <Nav />
            {children}
        </Container>
    )
}