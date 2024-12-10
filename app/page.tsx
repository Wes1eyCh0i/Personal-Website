"use client";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Typewriter from "react-ts-typewriter";
import { useState, useEffect } from "react";

export default function Home() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  const textArray = [
    "Software Engineer",
    "Web Developer",
    "Game Developer",
    "Cybersecurity Analyst",
    "Data Analyst",
    "College Student",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3000);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              {showTypewriter ? (
                <Typewriter
                  text={textArray}
                  speed={100}
                  random={100}
                  loop={true}
                  delay={3000}
                />
              ) : (
                <span>&nbsp;</span>
              )}
            </span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent"> Wesley Choi </span>
            </h1>
            <p className="max-w-lg mb-9 text-white/80">
              I'm a Senior Student from Boston University majoring in Computer
              Science
            </p>
            {/* Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  className="flex items-center gap-2"
                  href="/assets/resume.pdf"
                  download
                >
                  <span> Download Resume </span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  ContainerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration:500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
