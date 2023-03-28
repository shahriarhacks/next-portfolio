import { SKill } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type=="skills"]
`;
type Data = {
  skills: SKill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: SKill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
