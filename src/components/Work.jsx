import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    const cover = document.querySelectorAll(".cover");
    const image = document.querySelectorAll(".image");
    
    let currentOpenIndex = 0;  

    gsap.to(image[0], {
      height: "14rem",
      duration: 0.5,
      ease: "power2.out",
    });

    cover.forEach((cover, index) => {
      cover.addEventListener("click", () => {
        if (currentOpenIndex !== index) {
          gsap.to(image[currentOpenIndex], {
            height: "0",
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(image[index], {
            height: "14rem",
            duration: 0.5,
            ease: "power2.out",
          });
          currentOpenIndex = index;
        }
      });
    });
  }, []);

  return (
    <div className="col-span-1 lg:col-span-4 row-span-8 lg:row-span-4 bg-black text-white rounded-lg">
      <div className="wrapper w-full max-h-full flex flex-col items-start justify-evenly overflow-auto">
        <div className="cover w-full h-fit flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white  border-b-2">
          <div className="w-full h-fit flex justify-between items-center cursor-pointer">
            <h1 className="md:text-2xl text-xl">Curate Entertainment</h1>
            <img className="w-6 h-6" src="/ARROW.svg" alt="arrow" />
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/curate-entertainment.webp"
            alt=""
          />
        </div>
        <div className="cover w-full flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white  border-b-2">
          <div className="w-full h-fit flex justify-between items-center cursor-pointer">
            <h1 className="md:text-2xl text-xl">Curate Entertainment</h1>
            <img className="w-6 h-6" src="/ARROW.svg" alt="arrow" />
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/curate-entertainment.webp"
            alt=""
          />
        </div>
        <div className="cover w-full flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white ">
          <div className="w-full h-fit flex justify-between items-center cursor-pointer">
            <h1 className="md:text-2xl text-xl">Curate Entertainment</h1>
            <img className="w-6 h-6" src="/ARROW.svg" alt="arrow" />
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/curate-entertainment.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
