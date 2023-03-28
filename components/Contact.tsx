import { PageInfo } from "@/typings";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = { pageInfo: PageInfo };

const Contact = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:shahriar7ahmed@gmail.com?subject=${formData.subject}&body=Hi My name is ${formData.name} I want to ${formData.message}.
    Please contact with me ${formData.email}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div>
        <Link href={`tel:${pageInfo?.phoneNumber}`}>
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="text-gray-300 text-xl">{pageInfo?.phoneNumber}</p>
          </div>
        </Link>
        <Link href={`mailto:${pageInfo?.email}`}>
          {" "}
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className="text-xl text-gray-300">{pageInfo?.email}</p>
          </div>
        </Link>
        <div className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-xl text-gray-300">{pageInfo?.address}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto my-4 py-12 lg:py-0"
        >
          <div className="flex space-x-2">
            <input
              required
              {...register("name")}
              placeholder="Name"
              className="contactInput focus:border-lime-500/50 hover:border-lime-300/50 focus:text-green-500/70"
              type="text"
            />
            <input
              required
              {...register("email")}
              placeholder="Email"
              className="contactInput focus:border-lime-500/50 hover:border-lime-300/50 focus:text-green-500/70"
              type="email"
            />
          </div>
          <input
            required
            {...register("subject")}
            placeholder="Subject"
            className="contactInput focus:border-lime-500/50 hover:border-lime-300/50 focus:text-green-500/70"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className=" contactInput px-8 py-6 focus:border-lime-500/50 hover:border-lime-300/50 focus:text-green-500/70"
          />
          <button
            type="submit"
            className="bg-gray-500/80 py-2 px-10 rounded-md font-semibold hover:bg-gray-300/80 hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
