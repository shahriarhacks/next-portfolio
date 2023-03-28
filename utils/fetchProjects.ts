import { server } from "@/sanity";
import { Project } from "@/typings";

export const fetchProjects = async () => {
  const res = await fetch(`${server}/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
