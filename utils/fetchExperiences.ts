import { server } from "@/sanity";
import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  const res = await fetch(`${server}/api/getExperiences`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
