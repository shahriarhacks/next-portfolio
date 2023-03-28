import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = { project: Project; i?: number; length?: number };

const Project = ({ project, i, length }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 py-0 h-[90vh]"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        src={urlFor(project?.image).url()}
        alt={project?.title}
        className="lg:w-1/2 lg:h-1/2"
      />

      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-medium text-center m-0">
          <span className="underline decoration-yellow-900/50">Case Study</span>{" "}
          {i} of {length} : {project?.title}
        </h4>
        <div className="flex space-x-4">
          {project?.technologies?.map((tech) => (
            <img
              alt=""
              className="h-6 w-6 rounded-full"
              key={tech?._id}
              src={urlFor(tech?.image).url()}
            />
          ))}
        </div>
        <p className="text-center md:text-left text-sm">{project?.summery}</p>
      </div>
    </motion.div>
  );
};

export default Project;
