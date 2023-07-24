import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import HamburgerBar from "../../components/HamburgerBar";
import Home from "../../components/Home";
import MultiSliders from "../../components/MultiSliders";
import MyProjects from "../../components/MyProjects";
import SmoothPage from "../../components/SmoothPage";
import AppearOnScroll from "../../components/_common/AppearOnScroll";
import LiquidImage from "../../components/_common/SmokeLiquidEffect/LiquidImage";
import "./style.scss";

export default function LandingPage() {
  return (
    <SmoothPage>
      <HamburgerBar />
      <Home />
      <MultiSliders />
      <MyProjects />
      <AboutMe />
      <Contact />
      <AppearOnScroll />
    </SmoothPage>
  );
}
