import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col py-2 rounded-lg bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
        className="w-32 h-32 rounded-full object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
        <p className="font-semibold text-lg mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <img
              className="w-10 h-10 rounded-full"
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}
          {/* {experience?.isCurrentWorkingHere ?'Prsent': new Date(experience.dateEnd).toString()} */}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm m-0 max-h-[50px] w-full overflow-y-scroll scrollbar-thin ">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
