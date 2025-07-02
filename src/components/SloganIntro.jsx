import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SloganIntro = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".flower-icon",
      { opacity: 0.5 },
      { opacity: 1, rotation: 360, duration: 10, ease: "bounce.inOut", repeat: -1  }
    );

    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".skill-text",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8,
      }
    );
  });

  return (
    <div className="col-span-1 lg:col-span-5 row-span-2 lg:row-span-3 bg-black text-white rounded-lg">
      <div className="w-full h-full flex flex-col items-center justify-evenly gap-4 p-4 md:p-6">
        <img
          className="w-8 md:w-14 md:h-14 lg:w-16 lg:h-16 flower-icon self-end"
          src="/images/FLOWER ICON.svg"
          alt=""
        />
        <h1
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            animationDuration: 1,
          }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-normal intro-text text-[#b5b5b581] bg-clip-text inline-block animate-shine"
        >
          I'm <span className="font-[Sperry]">TANWEEL AKHTAR</span>. Working as a{" "}
          <span className="font-[Sperry]">Freelance</span> Web Developer
        </h1>
        <div className="capitalize text-xs md:text-sm lg:text-lg self-start">
          <span className="skill-text font-[Sperry]">
            javaScript
          </span>
          <span className="ml-4 skill-text font-[Sperry]">
            GSAP
          </span>
          <span className="ml-4 skill-text font-[Sperry]">
            Three.js
          </span>
          <span className="ml-4 skill-text font-[Sperry]">
            React.js
          </span>
          <span className="ml-4 skill-text font-[Sperry]">
            Next.js
          </span>
        </div>
      </div>
    </div>
  );
};

export default SloganIntro;
