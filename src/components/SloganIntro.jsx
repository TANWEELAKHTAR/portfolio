import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SloganIntro = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".flower-icon",
      { opacity: 0, rotation: -45 },
      { opacity: 1, rotation: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".skill-text",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.8 }
    );
  });

  return (
    <div className="col-span-1 lg:col-span-5 row-span-2 lg:row-span-3 bg-black text-white rounded-lg">
      <div className="w-full h-full flex flex-col justify-between items-end relative gap-4 p-6">
        <img
          className="hidden md:block md:w-14 md:h-14 lg:w-16 lg:h-16 flower-icon"
          src="/images/FLOWER ICON.svg"
          alt=""
        />
        <h1 className="text-3xl md:text-5xl font-semibold self-start leading-tight tracking-normal intro-text">I'm TANWEEL <span className="font-[Sperry]">AKHTAR</span>.
        I'm a <span className="font-[Sperry]">Freelance</span> Web Developer</h1>
        <h1 className="bottom self-start">
          <span className="font-[Sperry] capitalize text-sm lg:text-lg skill-text">javaScript</span>
          <span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4 skill-text">GSAP</span>
          <span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4 skill-text">Three.js</span>
          <span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4 skill-text">React.js</span>
          <span className="font-[Sperry] capitalize text-sm lg:text-lg ml-4 skill-text">Next.js</span>
        </h1>
      </div>
    </div>
  );
};

export default SloganIntro;
