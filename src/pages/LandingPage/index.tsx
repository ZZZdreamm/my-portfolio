import AppearOnScroll from "../../components/AppearOnScroll";
import Carousel from "../../components/Carousel";
import HamburgerBar from "../../components/HamburgerBar";
import MultiSliders from "../../components/MultiSliders";
import Slider from "../../components/Slider";
import SmoothPage from "../../components/SmoothPage";
import SmoothScroll from "../../components/SmoothScroll";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import FrontPage from "../Home";
import MyProjects from "../MyProjects";
import "./style.scss";

export default function LandingPage() {
  return (
    <>
      <SmoothPage>
        <HamburgerBar />
        <FrontPage />
        <MultiSliders />
        <MyProjects />
        <AboutMe />
        <Contact />
        <AppearOnScroll />
      </SmoothPage>
    </>
  );
}
