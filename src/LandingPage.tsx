import { useEffect, useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Menu from "./Menu";
import MyProjects from "./MyProjects";
import { ReadyImagesURL } from "./publicPaths";

export default function LandingPage() {
  const refHome = useRef<HTMLElement | null>(null);
  const refAboutMe = useRef<HTMLElement | null>(null);
  const refMyProjects = useRef<HTMLElement | null>(null);

  const [hello, setHello] = useState("Hello.");
  const [iAm, setIAm] = useState("I am");
  const [kacper, setKacper] = useState("Kacper");
  // const navigate = useNavigate()

  function moveText(elementId:any, move: boolean) {
    const element = document.getElementById(elementId);
    if (move) {
      element?.classList.add("page-text-changed");
      element?.classList.remove("page-text-back");
    } else {
      element?.classList.add("page-text-back");
      element?.classList.remove("page-text-changed");
    }
  }
  const navigate = useNavigate();
  return (
    <div className="front-page">
      <div className="front-page-text">
        <span
          id="text-1"
          className="page-text"
          onMouseEnter={(e) => {
            setHello("About");
            moveText('text-1', true)
          }}
          onMouseLeave={(e) => {
            setHello("Hello.");
            moveText('text-1', false)
          }}
          onClick={()=>{navigate('/about')}}
        >
          {hello}
        </span>
        <span
          id="text-2"
          className="page-text"
          onMouseEnter={(e) => {
            setIAm("Projects");
            moveText('text-2', true)
          }}
          onMouseLeave={(e) => {
            setIAm("I am");
            moveText('text-2', false)
          }}
          style={{ color: "red" }}
          onClick={()=>{navigate('/projects')}}
        >
          {iAm}
        </span>
        <span
          id="text-3"
          className="page-text"
          onMouseEnter={(e) => {
            setKacper("Contact");
            moveText('text-3', true)
          }}
          onMouseLeave={(e) => {
            setKacper("Kacper");
            moveText('text-3', false)
          }}
          style={{ color: "red" }}
          onClick={()=>{navigate('/contact')}}
        >
          {kacper}
        </span>
      </div>
      <img id="front-page-image" src={`${ReadyImagesURL}/front_photo.jpg`} />
    </div>
  );
}
