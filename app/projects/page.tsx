"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description:
      "asdsadasdasd ashdashdiuas ashdiahjd iuasduiasdhiuhuiauhh uhs iuahsciuhcashuid",
    stack: [{ name: "A" }, { name: "B" }],
    image: "/assets/photo.PNG",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project 22",
    description: "asdsadasdasd",
    stack: [{ name: "A" }, { name: "B" }],
    image: "/assets/photo.PNG",
    live: "",
    github: "",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delat: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-1/2 xl:h-[28rem] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/80">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-20 h-20 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> Live Project </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-20 h-20 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> Github Repository </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[32rem] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[28rem] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relateive w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[48px] h-[48px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
