import { server } from "@/sanity";
import { SKill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(`${server}/api/getSkills`);
  const data = await res.json();
  const skills: SKill[] = data.skills;
  return skills;
};
