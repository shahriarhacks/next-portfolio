import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tq1oqm0l",
  apiVersion: "2021-03-25",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

const dev = process.env.NODE_ENV === "production";
export const server = dev ? "http://localhost:3000" : "http://localhost:3000";
