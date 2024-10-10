"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

async function handleSubmit(event: any) {
  event.preventDefault();

  const data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
    title: String(event.target.title.value),
    message: String(event.target.message.value),
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response.json);
}

export default function Contact() {
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
            <form className="flex flex-col gap-6 p-10 bg-slate-800 rounded-xl">
              <h3 className="text-4xl text-accent">Let's have a chat</h3>
              <p className="text-white/80">
                Reach out to me through the contact form!
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
              </div>
              <Input type="email" placeholder="Email" />
              {/* Textarea */}
              <Textarea className="h-48" placeholder="Type your message here" />
              {/* Button */}
              <Button size="md" className="max-w-40" onSubmit={handleSubmit}>
                Send Message
              </Button>
            </form>
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
