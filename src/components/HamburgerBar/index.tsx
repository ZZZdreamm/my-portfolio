import { useEffect, useState } from "react";
import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Portal, { BodyPortal } from "../../utils/Portal";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const barStyle = open
    ? { left: "0px" }
    : { left: "-30vw", borderRadius: "75%" };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      //@ts-ignore
      if (e.target!.id != "hamburger-bar" && e.target!.id != "hamburger-icon") {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    function scrollToElement(elementId: string) {
      setTimeout(() => {
        const contactsElement = document.querySelector(`#${elementId}`);
        if (contactsElement) {
          console.log(contactsElement);
          // const yOffset = -window.innerHeight / 3;
          const y =
            contactsElement.getBoundingClientRect().top + window.pageYOffset;

          gsap.to(window, { duration: 2, scrollTo: y, ease: "power2.out" });
        }
      }, 1000);
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

  // useEffect(() => {
  //   if (open) {
  //     document.body.style.height = "100vh";
  //     document.body.style.overflowY = "hidden";
  //   } else if (open === false) {
  //     document.body.style.height = "auto";
  //     document.body.style.overflowY = "auto";
  //     updateScroller();
  //   }
  // }, [open]);

  return (
    <BodyPortal>
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
            <div data-name="home" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/home-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">Home</span>
            </div>
            <div data-name="projects" className="bar-content__body__item">
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/projects-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">Projects</span>
            </div>
            <div
              data-name="about"
              className="bar-content__body__item"
              // onClick={() => scrollTo("about")}
            >
              <img
                className="bar-content__body__item__icon"
                src={`${ReadyImagesURL}/about-icon.png`}
                alt=""
              />
              <span className="bar-content__body__item__text">About</span>
            </div>

            <div data-name="contact" className="bar-content__body__item">
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
    </BodyPortal>
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
