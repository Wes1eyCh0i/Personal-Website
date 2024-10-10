"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[17rem] h-[17rem] xl:w-[31rem] xl:h-[31rem] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.PNG"
            alt="Photo"
            quality={100}
            layout="fill"
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-72 h-72 xl:w-[32rem] xl:h-[32rem]"
          fill="transparent"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="256"
            cy="256"
            r="252"
            stroke="#00ccff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 0 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
