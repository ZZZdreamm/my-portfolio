import Carousel from "../../components/Carousel";
import HamburgerBar from "../../components/HamburgerBar";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import FrontPage from "../Home";
import MyProjects from "../MyProjects";
import "./style.scss";

export default function LandingPage() {
  return (
    <>
      <HamburgerBar />
      <FrontPage />
      <Carousel />
      <MyProjects />
      <AboutMe />
      <Contact />
    </>
  );
}
