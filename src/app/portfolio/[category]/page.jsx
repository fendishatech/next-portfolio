import PrimaryButton from "@/app/components/button/PrimaryButton";
import { DataItems } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getLocalData = (cat) => {
  const data = DataItems[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getLocalData(params.category);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl text-green-400 font font-extralight text-start">
        {params.category}
      </h1>
      {/* card */}
      <div className="flex flex-col even-child-reverse gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex-1 gap-8 justify-center flex flex-col">
              <h2 className=" text-4xl font-bold">{item.title}</h2>
              <p>{item.desc}</p>
              <div className="">
                <PrimaryButton url={"/"} text={"Read More"} />
              </div>
            </div>
            <div className="h-[400px] flex-1 relative">
              <Image
                className="object-cover"
                src={item.image}
                fill={true}
                alt={params.category}
              />
            </div>
          </div>
        ))}
      </div>
      {/* end card */}
    </div>
  );
};

export default Category;
