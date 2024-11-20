"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `${emailFormData.firstName} <${process.env.RESEND_FROM_EMAIL}>`,
      to: "wesleyc0830lc@gmail.com",
      subject: `New Message from ${emailFormData.firstName}`,
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        lastName: emailFormData.lastName,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
