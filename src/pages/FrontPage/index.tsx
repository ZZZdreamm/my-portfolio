import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";


export default function FrontPage() {
  const [hello, setHello] = useState("Hello.");
  const [iAm, setIAm] = useState("I am");
  const [myName, setMyName] = useState("Kacper");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  useEffect(() => {
    if (windowSize < 600) {
      setHello("Projects");
      setIAm("About");
      setMyName("Contact");
    } else {
      setHello("Hello.");
      setIAm("I am");
      setMyName("Kacper");
    }
  }, [windowSize]);

  function moveText(elementId: any, move: boolean) {
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

  function scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
  return (
    <div id="home" className="front-page">
      <div className="front-page-text">
        <span
          id="text-1"
          className="page-text"
          onMouseEnter={(e) => {
            setHello("Projects");
            moveText("text-1", true);
          }}
          onMouseLeave={(e) => {
            setHello("Hello.");
            moveText("text-1", false);
          }}
          onClick={() => {
            scrollTo("projects");
          }}
        >
          {hello}
        </span>
        <span
          id="text-2"
          className="page-text"
          onMouseEnter={(e) => {
            setIAm("About");
            moveText("text-2", true);
          }}
          onMouseLeave={(e) => {
            setIAm("I am");
            moveText("text-2", false);
          }}
          style={{ color: "red" }}
          onClick={() => {
            scrollTo("about");
          }}
        >
          {iAm}
        </span>
        <span
          id="text-3"
          className="page-text"
          onMouseEnter={(e) => {
            setMyName("Contact");
            moveText("text-3", true);
          }}
          onMouseLeave={(e) => {
            setMyName("Kacper");
            moveText("text-3", false);
          }}
          style={{ color: "red" }}
          onClick={() => {
            scrollTo("contact");
          }}
        >
          {myName}
        </span>
      </div>
      <img
        id="front-page-image"
        src={`${ReadyImagesURL}/front_photo.jpg`}
        alt=""
      />
    </div>
  );
}
