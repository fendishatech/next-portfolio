import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <div className="flex flex-col p-6">
      <div className="rounded-md flex gap-4 hover:shadow-xl">
        <div className="flex-1 gap-8 justify-start flex flex-col">
          <h2 className=" text-4xl font-bold">Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            illo, iusto dolore necessitatibus numquam recusandae voluptatum rem
            repudiandae.
          </p>
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
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum
        ducimus odio quos. Dolorum doloribus cupiditate inventore debitis, harum
        voluptatibus consequuntur, officiis itaque dolor suscipit et alias ea
        rem, voluptate vero sequi quidem aliquid. Unde quo beatae, possimus
        facere temporibus sequi neque, aut quos id, enim distinctio. Optio
        eligendi, reiciendis animi recusandae earum sapiente porro. Dolorem
        tenetur rerum deleniti inventore iusto, at dolores debitis ut veritatis
        accusamus! Vero, officiis. Eos pariatur, corporis consequatur incidunt
        illum rem molestias impedit voluptate minima dolor sunt totam,
        consequuntur delectus ullam culpa. Blanditiis provident quod aliquid
        ipsam facere, voluptas, minus autem consequuntur consectetur non
        quisquam.
      </p>
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum
        ducimus odio quos. Dolorum doloribus cupiditate inventore debitis, harum
        voluptatibus celeniti inventore iusto, at dolores debitis ut veritatis
        accusamus! Vero, officiis. Eos pariatur, corporis consequatur incidunt
        illum rem molestias impedit voluptate minima dolor sunt totam,
        consequuntur delectus ullam culpa. Blanditiis provident quod aliquid
        ipsam facere, voluptas, minus autem consequuntur consectetur non
        quisquam.
      </p>
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum
        ducimus odio quos. Dolorum doloribus cupiditate inventore debitis, harum
        voluptatibus consequuntur, officiis itaque dolor suscipit et alias ea
        rem, voluptate vero sequi quidem aliquid. Unde quo beatae, possimus
        facere temp voluptas, minus autem consequuntur consectetur non quisquam.
      </p>
    </div>
  );
};

export default BlogPost;
