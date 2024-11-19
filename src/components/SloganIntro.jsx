import React from "react";

const SloganIntro = () => {
  return (
    <div className="col-span-1 lg:col-span-5 row-span-2 lg:row-span-3 bg-black text-white rounded-lg">
      <div className="w-full h-full flex flex-col justify-between items-end relative gap-4 p-6">
        <img
          className="hidden md:block md:w-14 md:h-14 lg:w-16 lg:h-16"
          src="/FLOWER ICON.svg"
          alt=""
        />
        <h1 className="text-3xl md:text-5xl font-semibold self-start leading-tight tracking-normal">I'm TANWEEL <span className="font-[Sperry]">AKHTAR</span>.
        I'm a <span className="font-[Sperry]">Freelance</span> Web Developer</h1>
        <h1 className="bottom self-start"><span className="font-[Sperry] capitalize text-sm lg:text-lg">javaScript</span><span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4">GSAP</span><span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4">Three.js</span><span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4">React.js</span><span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4">Next.js</span></h1>
      </div>
    </div>
  );
};

export default SloganIntro;
