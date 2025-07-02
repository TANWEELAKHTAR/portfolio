import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".circle-icon",
      { opacity: 0.5 },
      {
        opacity: 1,
        rotation: 360,
        duration: 10,
        ease: "bounce.inOut",
        repeat: -1,
      }
    );

    let split = SplitText.create(".split", { type: "lines" });

    gsap.from(split.lines, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  });

  return (
    <div className="col-span-1 lg:col-span-4 row-span-8 lg:row-span-2 bg-black text-gray-400 rounded-lg">
      <div className="w-full h-full flex flex-col justify-between items-start gap-4 p-6">
        <img
          className="w-6 h-6 circle-icon"
          src="/images/CIRCLE ICON.svg"
          alt="circle"
        />
        <div className="w-full flex flex-col overflow-hidden">
          <p className="text-xs md:text-sm lg:text-lg font-extralight split">
            I specialize in designing sleek, intuitive websites that prioritize
            user experience and modern aesthetics. My focus is on crafting
            responsive, visually appealing interfaces that engage and delight
            users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
