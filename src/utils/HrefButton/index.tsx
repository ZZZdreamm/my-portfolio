import { useEffect, useRef } from "react";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";

interface HrefButtonProps {
  link: string;
}

export default function HrefButton({ link }: HrefButtonProps) {
  const hrefButtonRef = useRef<HTMLSpanElement>(null);
  const firstArrowRef = useRef<HTMLImageElement>(null);
  const secondArrowRef = useRef<HTMLImageElement>(null);
  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }
  useEffect(() => {
    if (
      !hrefButtonRef.current &&
      !firstArrowRef.current &&
      !secondArrowRef.current
    )
      return;
    hrefButtonRef.current?.addEventListener("mouseenter", () => {
      firstArrowRef.current!.style.transform = "rotate(45deg) translate(0%, -300%)";
      secondArrowRef.current!.style.transform = "rotate(45deg) translate(0%, 0%)";
    });
    hrefButtonRef.current?.addEventListener("mouseleave", () => {
      firstArrowRef.current!.style.transform = "rotate(45deg) translate(0%, 0%)";
      secondArrowRef.current!.style.transform = "rotate(45deg) translate(0%, 300%)";
    });
  }, []);

  return (
    <span ref={hrefButtonRef} className="hrefButton" onClick={handleClick}>
      <img ref={firstArrowRef} src={`${ReadyImagesURL}/svg-arrow.svg`} alt="" />
      <img
        ref={secondArrowRef}
        style={{ transform: "translate(-100%, 300%) rotate(45deg)" }}
        src={`${ReadyImagesURL}/svg-arrow.svg`}
        alt=""
      />
    </span>
  );
}
