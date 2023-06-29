import { useState } from "react";
import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const barStyle = open
    ? { right: "0px" }
    : { right: "-30vw", borderRadius: "75%" };

  function scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    toggleOpen();
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 1000);
  }
  return (
    <>
      <img
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
