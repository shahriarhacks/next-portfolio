import React from "react";
import { motion } from "framer-motion";
import { SKill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: SKill;
};

const Skills = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative cursor-pointer flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-full z-0 group-hover:bg-white h-16 w-16">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
