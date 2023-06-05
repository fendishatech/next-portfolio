import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[90px] px-6 flex justify-between">
      <div>2023 All Rights reserved</div>
      <div className="flex justify-center items-center gap-4">
        <Image
          className="opacity-80 cursor-pointer"
          width={25}
          height={25}
          src={`/social/1.png`}
          alt="portfolio"
        />
        <Image
          className="opacity-80 cursor-pointer"
          width={25}
          height={25}
          src={`/social/2.png`}
          alt="portfolio"
        />
        <Image
          className="opacity-80 cursor-pointer"
          width={25}
          height={25}
          src={`/social/3.png`}
          alt="portfolio"
        />
        <Image
          className="opacity-80 cursor-pointer"
          width={25}
          height={25}
          src={`/social/4.png`}
          alt="portfolio"
        />
      </div>
    </div>
  );
};

export default Footer;
