import PrimaryButton from "@/app/components/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const revalidatedRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const dynamicRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl text-green-400 font font-extralight text-start">
        Blogs
      </h1>
      {/* card */}
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
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
              <h2 className=" text-4xl font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </Link>
      ))}
      {/* end card */}
    </div>
  );
};

export default Blog;
