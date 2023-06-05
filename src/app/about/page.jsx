import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="px-6 py-2 flex flex-col">
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt="About"
      />
      <div className="flex justify-start flex-col">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          praesentium distinctio sint!
        </p>
      </div>
    </div>
  );
};

export default About;
