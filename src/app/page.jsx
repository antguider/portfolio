"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h3 className="text-2xl md:text-4xl ">
           Hi, I am <b>Muthukumar Jayamurugan</b>
          </h3>
          {/* DESC */}
          <p className="md:text-xl">
          I am a motivated and versatile Full stack developer with over 13 years of experience. 
          With a passion for modern front-end technologies like React, Redux, Next.js and Node.js, I am dedicated to delivering high-quality, scalable web applications. I excel in leading development teams and implementing best practices to enhance user engagement and performance. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
