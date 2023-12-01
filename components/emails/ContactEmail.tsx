import { FC } from "react";

interface EmailTemplateProps {
    name: string
    email: string
    message: string
  }
  
export const ContactEmail: FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
    <div>
      <p>This email has been sent from someone filling out your contact form on orlandosilvaart.com</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );