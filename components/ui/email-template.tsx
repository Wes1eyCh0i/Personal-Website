import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h3>
      {firstName} {lastName} just messaged you!
    </h3>
    <h3>Please send an new email to {email}</h3>
    <p>{message}</p>
  </div>
);
