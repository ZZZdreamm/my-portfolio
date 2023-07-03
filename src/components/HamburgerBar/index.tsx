import { useEffect, useState } from "react";
import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let st = ScrollTrigger.create({});
export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const barStyle = open
    ? { left: "0px" }
    : { left: "-30vw", borderRadius: "75%" };

  function scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    toggleOpen();
    setTimeout(() => {
      // st.scroll(10000)
      element!.scrollIntoView({
        block: "start",
        inline: "nearest",
      });
    }, 1000);
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      //@ts-ignore
      if (e.target!.id != "hamburger-bar" && e.target!.id != "hamburger-icon") {
        setOpen(false);
      }
    });
  }, []);
  return (
    <>
      <img
        id="hamburger-icon"
        className="hamburger-bar"
        onClick={toggleOpen}
        src={`${ReadyImagesURL}/hamburger-icon.png`}
        alt=""
      />
      <div id="hamburger-bar" className="bar" style={barStyle}>
        <div className="bar-content">
          <div className="bar-content__body">
            <div
              className="bar-content__body__item"
              onClick={() => scrollTo("home")}
            >
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/home-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">Home</span>
            </div>
            <div
              className="bar-content__body__item"
              onClick={() => scrollTo("projects")}
            >
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/projects-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">Projects</span>
            </div>
            <div
              className="bar-content__body__item"
              onClick={() => scrollTo("about")}
            >
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/about-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">About</span>
            </div>

            <div
              className="bar-content__body__item"
              onClick={() => scrollTo("contact")}
            >
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/contact-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
