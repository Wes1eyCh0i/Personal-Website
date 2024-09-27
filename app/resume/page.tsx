"use client";

import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGoland, SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description: "bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh",
  info: [
    { fieldName: "Name", fieldValue: "Bruh" },
    { fieldName: "Name", fieldValue: "Bruh" },
    { fieldName: "Name", fieldValue: "Bruh" },
  ],
};

const experience = {
  title: "Bruh",
  description: "bruh bruh bruh",
  items: [
    {
      duration: "Summer 2024",
      position: "Freelance FullStack Developer",
      company: "ACT Law Firm",
    },
    {
      duration: "Summer 2023",
      position: "IT Service Management Intern",
      company: "Tai Fung Bank",
    },
  ],
};

const skill = {
  title: "My skills",
  description:
    "I'm a full stack developer who also have interests in game development and cybersecurity. I enjoy working with modern web technologies and bringing interfaces to life.",
  skillList: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Html5", icon: <FaHtml5 /> },
    { name: "Css3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Goland", icon: <SiGoland /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "React", icon: <FaReact /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-4/5 flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-16"
        >
          {/* Tabs */}
          <TabsList className="flex flex-col w-full max-w-96 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-5/7 w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[37.5rem] text-white/80 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-96">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-800 h-48 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-128 min-h-8 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-1 h-1 rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full"></TabsContent>
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[37.5rem] text-white/80 mx-auto xl:mx-0">
                    {skill.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                  {skill.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-40 bg-slate-800 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
