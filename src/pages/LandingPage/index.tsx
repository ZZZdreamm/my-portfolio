import { useEffect, useRef } from "react";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import FrontPage from "../Home";
import useIsInViewport from "../../Hooks/IsInViewPort";
import MyProjects from "../MyProjects";
import SlidingBar from "../../components/SlidingBar";
import HamburgerBar from "../../components/HamburgerBar";
import "./style.scss";
import MouseFollower from "../../utils/MouseFollower";
import ImageFollower from "../../components/ImageFollower";
import Background from "../../components/Background";
import BubbleEffect from "../../components/BubbleEffect";

export default function LandingPage() {
  return (
    <>
      <HamburgerBar />
      <FrontPage />
      <SlidingBar />
      <MyProjects />
      <AboutMe />
      <Contact />
    </>
  );
}
