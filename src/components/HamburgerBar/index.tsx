import { useEffect, useState } from "react";
import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  BlurEffectImage,
  DefaultImage,
  Image1,
  Image2,
  Image3,
  Image4,
} from "./barImages";
import BlurImage from "../BlurImage/blurImage";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  const [currentShownImage, setCurrentShownImage] = useState(DefaultImage);
  const [previousImage, setPreviousImage] = useState(DefaultImage);

  function toggleOpen(open: boolean) {
    const hamburgerToggle = document.querySelector(
      "#hamburger-icon"
    ) as HTMLButtonElement;
    if (hamburgerToggle.disabled) return;
    console.log("toggling", open);

    hamburgerToggle.disabled = true;
    const barItems = document.querySelectorAll(
      ".bar-content__body__item"
    ) as NodeListOf<HTMLElement>;
    const itemAppearingTime = 200;

    if (open) {
      toggleBar(open);
      setOpen(open);
      setTimeout(() => {
        barItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
          }, index * itemAppearingTime + 2000);
        });
      }, 1000);
    } else {
      barItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "0";
        }, index * itemAppearingTime);
      });
      setTimeout(() => {
        toggleBar(open);
      }, barItems.length * itemAppearingTime + 200);
    }
  }

  function toggleBar(open: boolean) {
    const hamburgerToggle = document.querySelector(
      "#hamburger-icon"
    ) as HTMLButtonElement;
    const barHeader = document.querySelector(".bar-header") as HTMLElement;
    const barContent = document.querySelector(".bar-content") as HTMLElement;
    const barImages = document.querySelector(".bar-images") as HTMLElement;
    if (open) {
      barHeader.style.width = "8rem";
      setTimeout(() => {
        if (window.innerWidth < 768) {
          barContent.style.width = "calc(100vw - 8rem)";
        } else {
          barContent.style.width = "calc(50vw - 4rem)";
        }
        setTimeout(() => {
          barImages.style.width = "calc(50vw - 4rem)";
          setTimeout(() => {
            hamburgerToggle.disabled = false;
          }, 1000);
        }, 1000);
      }, 1000);
    } else {
      barImages.style.width = "0";
      setTimeout(() => {
        barContent.style.width = "0";
        setTimeout(() => {
          barHeader.style.width = "0";
          setTimeout(() => {
            hamburgerToggle.disabled = false;
            setOpen(open);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }

  useEffect(() => {
    function scrollToElement(elementId: string) {
      toggleOpen(false);
      setTimeout(() => {
        console.log("contacting");
        const contactsElement = document.querySelector(`#${elementId}`);
        if (contactsElement) {
          const y =
            contactsElement.getBoundingClientRect().top + window.pageYOffset;

          gsap.to(window, { duration: 2, scrollTo: y, ease: "power2" });
        }
      }, 5000);
    }

    const links = document.querySelectorAll(".bar-content__body__item");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let scrollTarget = link.getAttribute("data-name")!;

        scrollToElement(scrollTarget);
      });
    });
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else if (open === false) {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
      updateScroller();
    }
  }, [open]);

  useEffect(() => {
    const barItems = document.querySelectorAll(
      ".bar-content__body__item"
    ) as NodeListOf<HTMLElement>;
    barItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const itemName = item.getAttribute("data-name");
        if (itemName) {
          setPreviousImage(currentShownImage);
          switch (itemName) {
            case "home":
              setCurrentShownImage(Image1);
              break;
            case "projects":
              setCurrentShownImage(Image2);
              break;
            case "about":
              setCurrentShownImage(Image3);
              break;
            case "contact":
              setCurrentShownImage(Image4);
              break;
          }
        }
      });
    });
    barItems.forEach((item) => {
      item.addEventListener("mouseleave", () => {
        setCurrentShownImage(previousImage);
      });
    });
  }, []);

  return (
    <>
      <button id="hamburger-icon" onClick={() => toggleOpen(!open)}>
        <img
          className="hamburger-bar"
          src={`${ReadyImagesURL}/hamburger-icon.png`}
          alt=""
        />{" "}
      </button>
      <div id="hamburger-bar" className="bar">
        <section className="bar-header"></section>
        <section className="bar-content">
          <div className="bar-content__body">
            <div data-name="home" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/home-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">
                Home /{" "}
                <span className="bar-content__body__item__text__subheader">
                  intro
                </span>{" "}
              </span>
            </div>
            <div data-name="projects" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/projects-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">
                Projects /{" "}
                <span className="bar-content__body__item__text__subheader">
                  my work
                </span>
              </span>
            </div>
            <div data-name="about" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/about-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">
                About /{" "}
                <span className="bar-content__body__item__text__subheader">
                  my history
                </span>
              </span>
            </div>

            <div data-name="contact" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/contact-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">
                Contact /{" "}
                <span className="bar-content__body__item__text__subheader">
                  welcome
                </span>
              </span>
            </div>
          </div>
        </section>
        <section className="bar-images">
          <div className="bar-images__item">
            <BlurImage
              currentImage={currentShownImage}
              previousImage={previousImage}
            />
            {/* <img
              className="bar-images__item__image"
              src={currentShownImage}
              alt=""
            /> */}
          </div>
        </section>
      </div>
    </>
  );
}

function updateScroller() {
  var html = document.documentElement;
  var body = document.body;

  var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.05,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };

  var requestId = null;

  gsap.set(scroller.target, {
    rotation: 0.01,
    force3D: true,
  });
  var resized = scroller.resizeRequest > 0;

  if (resized) {
    var height = scroller.target?.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  gsap.set(scroller.target, {
    y: -scroller.y,
  });

  requestId =
    scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}
