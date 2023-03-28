import BackgroundCircle from "@/components/BackgroundCircle";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "<CodingReadingTypingResearch/>",
      "Eat-Sleep-Code-Repeat.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        className="rounded-full relative mx-auto h-32 w-32 object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7A52A" cursorStyle="_" />
        </h1>
        <h2 className="text-sm uppercase text-gray-500 pt-4 tracking-[15px]">
          MERN Stack Developer
        </h2>
        <div className="mt-5">
          <Link href="#about" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              About
            </button>
          </Link>
          <Link href="#experiences" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Experience
            </button>
          </Link>
          <Link href="#skills" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Skills
            </button>
          </Link>
          <Link href="#projects" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Projects
            </button>
          </Link>
          <Link href="#contact" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
