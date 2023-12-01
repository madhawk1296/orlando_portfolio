'use server'

import { ContactEmail } from '@/components/emails/ContactEmail';
import { Resend } from 'resend';

export default async function contact(formdata: FormData): Promise<{error: string | null}> {
    const name = formdata.get("name") as string
    const email = formdata.get("email") as string
    const message = formdata.get("message") as string

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: `Contact Form Inquiry <${process.env.NEXT_PUBLIC_WEBSITE_EMAIL}>`,
            to: [process.env.NEXT_PUBLIC_ORLANDO_EMAIL!],
            subject: `${name} - Inquiry`,
            react: ContactEmail({name, email, message })!,
        });

    } catch(e: any) {
        return { error: e.message}
    }
    
    return { error: null}
}