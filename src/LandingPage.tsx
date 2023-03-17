import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Menu from "./Menu";
import MyProjects from "./MyProjects";

export default function LandingPage() {
  const refHome = useRef<HTMLElement | null>(null)
  const refAboutMe = useRef<HTMLElement | null>(null)
  const refMyProjects = useRef<HTMLElement | null>(null)


  return (
    <div>
    <Menu />
    <Home/>
    <AboutMe/>
    <MyProjects/>
    </div>
  );
}
