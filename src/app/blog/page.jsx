import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl text-green-400 font font-extralight text-start">
        Blogs
      </h1>
      {/* card */}
      <Link href={"/blog/1"}>
        <div className="p-2 rounded-md flex gap-4 hover:shadow-xl">
          <div className="w-[300px] h-[300px] flex-1 relative">
            <Image
              className="rounded-md object-cover"
              src="https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&w=400"
              fill={true}
              alt={"Blog"}
            />
          </div>
          <div className="flex-1 gap-8 justify-center flex flex-col">
            <h2 className=" text-4xl font-bold">Title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              illo, iusto dolore necessitatibus numquam recusandae voluptatum
              rem repudiandae.
            </p>
          </div>
        </div>
      </Link>
      {/* end card */}
    </div>
  );
};

export default Blog;
