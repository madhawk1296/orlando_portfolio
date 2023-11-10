import { FC } from "react";

interface EmailTemplateProps {
    email: string;
    message: string
  }
  
export const ContactEmail: FC<Readonly<EmailTemplateProps>> = ({ email, message }) => (
    <div>
      <p>From: {email}!</p>
      <br/><br/>
      <p>{message}</p>
    </div>
  );