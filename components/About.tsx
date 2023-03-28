import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
// import Image from "next/image";

type Props = { pageInfo: PageInfo };
const des =
  "Hi, That's me, SHAHRIAR AHMED. I'm known as Shifat to everyone. At 18 years old, I am a young man. I'm from Bangladesh's Rangpur District and Division. I am a Computer Science and Technology student and also a Full Stack Developer. I've been programming for more than two years.";
const des2 =
  "I enjoy the programming industry for a good reason. Programming languages are continually being discovered. I enjoy picking up new coding skills and technologies. I'd like to work with backend technologies because I find them to be quite appealing and would like learning and working with them.";
const des3 =
  "I want to employ machine learning (ML), deep learning (DL), and neural networks (NN) to further my work in artificial intelligence (AI) and data science (DS). I'm learning Python tools like NumPy, Pandas, Scikit-Learn, NLTK, Keras, and PyTorch for this, and I'm also looking into Julia for potential future work.";
const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(pageInfo.profilePic).url()}
        className="mt-16 xl:mt-10 w-56 h-56 rounded-full object-cover -mb-20 md:mb-0 md:rounded-lg md:w-64 md:h-80 xl:w-[380px] xl:h-[460px] flex-shrink-0"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#50fff0]">little</span>{" "}
          background
        </h4>
        <p className="text-sm lg:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
