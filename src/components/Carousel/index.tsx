import { useEffect, useState } from "react";
import "./styles.scss";

export default function Carousel() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      const wrapSlider = document.querySelector(
        "#js-wrapSlider"
      ) as HTMLElement;
      const sliderrr = document.createElement("ul");
      sliderrr.className = "js-slider";
      const item = document.createElement("li");
      item.className = "item";
      const span = document.createElement("span");
      span.innerText = "Projects!!!";
      item.appendChild(span);
      sliderrr.appendChild(item);
      sliderrr.appendChild(item);
      sliderrr.appendChild(item);

      const sliders = document.querySelectorAll(".js-slider");

      sliders.forEach((slider: Element) => {
        slider.remove();
      });
      wrapSlider.appendChild(sliderrr);
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const wrapSlider = document.querySelector("#js-wrapSlider") as HTMLElement;
    if (!wrapSlider) return;
    if (!windowSize) return;
    window.requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    const widthWrap = wrapSlider.offsetWidth;

    let items;
    let sliders: any;
    let sliderList: any = [];

    const getSliderList = () => {
      sliders = document.querySelectorAll(".js-slider");
      // get the dom elements in a array to better use it
      sliderList = [...sliders];
    };
    // made a function for update later
    getSliderList();

    const slider = document.querySelectorAll(".js-slider")[0] as HTMLElement;
    const sliderWidth = slider.offsetWidth;

    const iterationItems = Math.ceil((widthWrap + sliderWidth) / sliderWidth);

    // we clone number of slider we need
    if (iterationItems > 1) {
      for (let i = 0; i < iterationItems - 1; i++) {
        const clone = slider.cloneNode(true);
        wrapSlider.appendChild(clone);
      }

      getSliderList();
    }

    // we create an array for knowing the state of each item
    let stateList = sliderList.map((item: any, i: number) => {
      let pos = 0;
      let start = false;

      // here we allow the slide to start fully at left
      if (i < iterationItems - 1) {
        pos = -widthWrap + sliders[i].offsetWidth * i;
        start = true;

        sliders[i].style.transform = `translate(${pos}px, -50%)`;
      }

      return {
        pos,
        start,
      };
    });

    // logic animation for sliding each item at a time
    const translate = () => {
      for (let i = 0; i < sliderList.length; i++) {
        const slider = sliderList[i];
        const sliderWidth = slider.offsetWidth;
        const nextIndex = i != sliderList.length - 1 ? i + 1 : 0;
        let pos;

        let pixelsToMove = 1;
        if (windowSize > 600) {
          pixelsToMove = 3;
        }
        // if slider should be in movement
        if (stateList[i].start) {
          stateList[i].pos -= pixelsToMove;
          pos = stateList[i].pos;
          slider.style.transform = `translate(${pos}px, 0%)`;
        }

        const isComplete = pos <= -sliderWidth;
        const isOutSeen = pos <= -widthWrap - sliderWidth;

        // if the slider is fully on screen
        if (isComplete) {
          stateList[nextIndex].start = true;
        }
        // if the slider finished crossing the slider and has disappeared
        if (isOutSeen) {
          stateList[i].start = false;
          stateList[i].pos = 0;
        }
      }
    };

    let isPaused = false;

    function start() {
      if (!isPaused) {
        translate();
      }

      requestAnimationFrame(start);
    }

    start();
   
  }, [windowSize]);

  return (
    <div className="container">
      <div className="wrap-slider" id="js-wrapSlider">
        <ul className="js-slider">
          <li className="item">
            <span>Projects!!!</span>
          </li>
          <li className="item">
            <span>Projects!!!</span>
          </li>
          <li className="item">
            <span>Projects!!!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
