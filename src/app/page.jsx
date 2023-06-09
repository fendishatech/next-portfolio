import Image from "next/image";
import HeroImg from "@hero.png";
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-x-[100px]">
      <div className="w-full h-full flex-1 flex flex-col p-6 mt-4 gap-y-6">
        <h1 className="py-4 text-7xl font-bold bg-gradient-to-b from-green-500 via-green-400 to-slate-200 text-transparent bg-clip-text">
          Better design your digital products.
        </h1>
        <p className="text-2xl text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          dolore.
        </p>
        <div>
          <button className="px-8 py-4 text-2xl font-semibold text-white rounded bg-green-600 hover:bg-green-400">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1  p-6 mt-4">
        <Image
          src={HeroImg}
          className="w-full object-cover hero-image__animation"
          alt="Hero"
        />
      </div>
    </div>
  );
};
