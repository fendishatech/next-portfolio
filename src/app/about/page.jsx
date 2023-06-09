import Image from "next/image";
import React from "react";
import PrimaryButton from "@/components/button/PrimaryButton";

const About = () => {
  return (
    <div className="px-6 py-2 flex flex-col">
      <div className="px-6 w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          className="object-cover filter grayscale-100"
          alt="About"
        />
        <div className="px-4 py-2 flex justify-start flex-col absolute bg-green-300 opacity-95 text-white bottom-6 left-6">
          <h1 className="text-3xl font-semibold">About Us</h1>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            praesentium distinctio sint!
          </p>
        </div>
      </div>
      <div className="flex gap-[100px] mt-6">
        <div className="flex-1 py-4 flex-col">
          <h1 className="text-4xl my-4">Who Are We?</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 py-4 flex-col">
          <h1 className="text-4xl my-4">What We Do?</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <PrimaryButton url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
