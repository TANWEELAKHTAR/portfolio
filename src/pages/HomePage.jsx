import About from "../components/About";
import Contact from "../components/Contact";
import Potrait from "../components/Potrait";
import SloganIntro from "../components/SloganIntro";
import Social from "../components/Social";
import Work from "../components/Work";

export default function HomePage() {
  return (
    <>
      <SloganIntro />
      <Potrait />
      <Work />
      <About />
      <Contact />
      <Social />
    </>
  );
}
