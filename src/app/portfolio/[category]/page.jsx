import PrimaryButton from "@/app/components/button/PrimaryButton";
import DataItems from "@/data/data";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl text-green-400 font font-extralight text-start">
        {params.category}
      </h1>
      {/* card */}
      <div className="flex flex-row-reverse gap-4">
        <div className="flex-1 gap-8 justify-center flex flex-col">
          <h2 className=" text-4xl font-bold">Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            illo, iusto dolore necessitatibus numquam recusandae voluptatum rem
            repudiandae.
          </p>
          <div className="">
            <PrimaryButton url={"/"} text={"Read More"} />
          </div>
        </div>
        <div className="h-[400px] flex-1 relative">
          <Image
            className="object-cover"
            src="https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&w=400"
            fill={true}
            alt={params.category}
          />
        </div>
      </div>
      {/* end card */}
    </div>
  );
};

export default Category;
