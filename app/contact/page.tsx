"use client";
import { formSchema } from "@/lib/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { send } from "@/lib/email";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+1 (781) 518-1257" },
  { icon: <FaEnvelope />, title: "Email", description: "wesc01@bu.edu" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Boston, MA 02134",
  },
];

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    send(values);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Form */}
          <div className="xl:w-3/5 order-2 xl:order-none">
            <Form {...form}>
              <form
                className="flex flex-col gap-6 p-10 bg-slate-800 rounded-xl"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <h3 className="text-4xl text-accent">Let's have a chat</h3>
                <p className="text-white/80">
                  Reach out to me through the contact form!
                </p>
                {/* Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Textarea */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          className="h-48"
                          placeholder="Type your message here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Button */}
                <Button size="md" className="max-w-40" type="submit">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-12 h-12 xl:w-16 xl:h-16 bg-slate-800 text-accent rounded-md flex items-center justify-center">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/80">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
