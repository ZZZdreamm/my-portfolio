import { useEffect, useRef } from "react";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import FrontPage from "../Home";
import useIsInViewport from "../../Hooks/IsInViewPort";
import MyProjects from "../MyProjects";
import SlidingBar from "../../components/SlidingBar";
import HamburgerBar from "../../components/HamburgerBar";
import "./style.scss";

export default function LandingPage() {
  const spanRef = useRef(null);
  var scrolledToAbout = useIsInViewport(spanRef, "50px");
  useEffect(() => {
    if (scrolledToAbout === undefined) return;
    changeBackgroundColor(scrolledToAbout);
  }, [scrolledToAbout]);

  function changeBackgroundColor(isIn: boolean) {
    if (isIn) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
        <HamburgerBar />
        <FrontPage />
        <SlidingBar />
        <MyProjects />
        <span ref={spanRef}>
          <AboutMe />
          <Contact />
        </span>
    </>
  );
}
