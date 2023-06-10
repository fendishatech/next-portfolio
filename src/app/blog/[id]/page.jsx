import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

async function getPost(id) {
  const dynamicRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!dynamicRes.ok) {
    return notFound();
  }

  return dynamicRes.json();
}

const BlogPost = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div className="flex flex-col p-6">
      <div className="rounded-md flex gap-4">
        <div className="flex-1 gap-8 justify-start flex flex-col">
          <h2 className=" text-4xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
          {/* Author section */}
          <div className="flex">
            <div className="w-[30px] h-[30px] flex-1 relative">
              <Image
                className="object-cover rounded-full"
                src="https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&w=400"
                fill={true}
                alt={"Blog"}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="text-gray-900 font-semibold">Author Name</h2>
              <p className="text-gray-500">author description</p>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] flex-1 relative">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&w=400"
            fill={true}
            alt={"Blog"}
          />
        </div>
      </div>
      <p className="mt-8">{post.body}</p>
      <p className="mt-8">{post.body}</p>
      <p className="mt-8">{post.body}</p>
    </div>
  );
};

export default BlogPost;
