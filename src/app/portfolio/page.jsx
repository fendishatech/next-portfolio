import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-8 text-5xl text-green-400 font font-extralight text-center">
        Choose a gallery
      </h1>
      <div className="items flex gap-10">
        <Link
          className="illustration-bg border-[4px] w-[300px] h-[300px] border-[#bbb]  relative"
          href={"/portfolio/illustration"}
        >
          <p className="text-[#bbb] hover:text-[#53c28b] text-2xl font-bold right-[10px] bottom-[10px]  absolute">
            Illustrations
          </p>
        </Link>
        <Link
          className="website-bg border-[4px] w-[300px] h-[300px] border-[#bbb]  relative"
          href={"/portfolio/websites"}
        >
          <p className="text-[#bbb] hover:text-[#53c28b] text-2xl font-bold right-[10px] bottom-[10px] absolute">
            Websites
          </p>
        </Link>
        <Link
          className="apps-bg border-[4px] w-[300px] h-[300px] border-[#bbb]  relative"
          href={"/portfolio/application"}
        >
          <p className="text-[#bbb] hover:text-[#53c28b] text-2xl font-bold right-[10px] bottom-[10px] absolute">
            Applications
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
