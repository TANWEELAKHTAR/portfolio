import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".cover",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
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
    gsap.fromTo(
      ".arrow",
      { rotation: 45 },
      { rotation: 0, duration: 0.8, ease: "power2.inOut", yoyo: true }
    );
  });

  return (
    <div className="col-span-1 lg:col-span-4 row-span-8 lg:row-span-4 bg-black text-white rounded-lg">
      <div className="wrapper w-full max-h-full flex flex-col items-start justify-evenly overflow-auto">
        <div className="cover w-full h-fit flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white  border-b-2">
          <div className="w-full h-fit flex justify-between items-center">
            <h1 className="md:text-2xl text-xl">Edicruit</h1>
            <a href="https://edicruit.netlify.app/" className="cursor-pointer">
              <img className="w-6 h-6 arrow" src="/images/ARROW.svg" alt="arrow" />
            </a>
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/images/edicruit.png"
            alt=""
          />
        </div>
        <div className="cover w-full flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white  border-b-2">
          <div className="w-full h-fit flex justify-between items-center">
            <h1 className="md:text-2xl text-xl">Adidhi</h1>
            <a href="https://adidhi.com" className="cursor-pointer">
              <img className="w-6 h-6 arrow" src="/images/ARROW.svg" alt="arrow" />
            </a>
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/images/adidhi.png"
            alt=""
          />
        </div>
        <div className="cover w-full flex flex-col justify-between items-start gap-4 p-4 xl:p-6 border-b-white ">
          <div className="w-full h-fit flex justify-between items-center">
            <h1 className="md:text-2xl text-xl">Cyberfiction</h1>
            <a href="https://cyberfication.netlify.app" className="cursor-pointer">
              <img className="w-6 h-6 arrow" src="/images/ARROW.svg" alt="arrow" />
            </a>
          </div>
          <img
            className="image w-full h-0 object-cover rounded-lg cursor-pointer"
            src="/images/cyberfiction.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
