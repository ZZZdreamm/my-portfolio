import { useEffect, useRef } from "react";
import "./styles.scss";

export default function Slider() {
  const numberOfSlides = 10;
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.classList.add("left");
  }, []);

  return (
    <div class="slider">
      <div ref={sliderRef} class="slide-track">
        {Array.from(Array(numberOfSlides).keys()).map((i) => (
          <div class="slide">PROJECTS!!!</div>
        ))}
      </div>
    </div>
  );
}
