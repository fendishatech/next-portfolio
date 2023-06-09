import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl my-10 text-green-400 font font-extralight text-center">
        Lets Keep in Touch
      </h1>
      <div className="p-6 flex flex-row sm-flex-col gap-10">
        <div className="h-[500px] relative flex-1 justify-center items-center animate-wobble">
          <Image
            className="contact-image__animation"
            fill={true}
            src="/contact.png"
            alt="contact"
          />
        </div>
        <form className="p-4 flex-1 flex flex-col gap-4">
          <input
            type="text"
            className="px-6 py-2 text-2xl bg-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-blue-500 outline-2 outline-solid"
          />
          <input
            type="text"
            className="px-6 py-2 text-2xl bg-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-blue-500 outline-2 outline-solid"
          />
          <textarea
            className="bg-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-blue-500 outline-2 outline-solid"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <PrimaryButton url={"/send"} text={"Send Message"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
