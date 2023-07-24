import { useEffect, useRef, useState } from "react";
import { ReadyImagesURL } from "../../../../publicPaths";
import "./style.scss";

export default function PerspectiveLine({
  text,
  subtext,
  href,
  multiplier,
  transformation,
  imageURL,
}: PerspectiveLineProps) {
  const refElement = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (refElement == null) {
      return;
    }
    const line = refElement.current as HTMLDivElement;
    const element1 = line.childNodes[0] as HTMLSpanElement;
    const element2 = line.childNodes[1] as HTMLSpanElement;
    element1.classList.add("perspective-move");
    element2.classList.add("perspective-move");
    line.addEventListener("mouseover", () => {
      element1.style.transform = `translateY(-5rem)`;
      element2.style.transform = `translateY(-5rem)`;
    });
    line.addEventListener("mouseleave", () => {
      element1.style.transform = `translateY(0)`;
      element2.style.transform = `translateY(0)`;
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      const socialsContainer = document.getElementById("socials-container")!;
      const fontS = window.getComputedStyle(socialsContainer).fontSize;
      const [siz, _] = fontS.split(".");
      const intSize = parseInt(siz);
      setStyle({
        left: `${intSize * (multiplier - 1)}px`,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const socialsContainer = document.getElementById("socials-container")!;
    const fontS = window.getComputedStyle(socialsContainer).fontSize;
    const [siz, _] = fontS.split(".");
    const intSize = parseInt(siz);
    setStyle({
      left: `${intSize * (multiplier - 1)}px`,
    });
  }, []);
  return (
    <div
      className={`perspective-line ${transformation}`}
      style={style}
      ref={refElement}
    >
      <p className="my-social text">{text}</p>
      <p className="my-social link">
        {href ? (
          <span
            className="social-ref"
            onClick={() => window.open(href, "_blank")}
          >
            {subtext}
          </span>
        ) : (
          subtext
        )}
        {imageURL ? (
          <img
            className="link-image"
            src={`${ReadyImagesURL}/${imageURL}`}
            alt=""
          />
        ) : null}
      </p>
    </div>
  );
}

export interface PerspectiveLineProps {
  text: string;
  subtext: string;
  href?: string;
  multiplier: number;
  transformation?: string;
  imageURL?: string;
}
