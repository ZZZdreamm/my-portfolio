import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../Hooks/IsInViewPort";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";
import UseWindowSize from "../../Hooks/WindowSizeChanged";

export default function Project({ icon, name, side, link }: ProjectProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [marginStyle, setMarginStyle] = useState("0 0 0 0");
  const windowSize = UseWindowSize(marginMove);

  var scrolledToAbout = useIsInViewport(ref, "200px");
  useEffect(() => {
    if (scrolledToAbout === undefined) return;
    blurEffect(ref.current, scrolledToAbout);
  }, [scrolledToAbout]);

  function blurEffect(blurImg: any, ifIn: boolean) {
    if (ifIn) {
      blurImg.classList.remove("blur");
    } else {
      blurImg.classList.add("blur");
    }
  }

  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  function marginMove(windowSize: number) {
    let margin = 0;
    if (windowSize < 600) {
      margin = 0;
    } else if (windowSize < 800) {
      margin = 5;
    } else if (windowSize < 1200) {
      margin = 10;
    }else {
      margin = 15
    }
    if(side === "left"){
      setMarginStyle(`0 0 0 ${margin}%`)
    }else{
      setMarginStyle(`0 ${margin}% 0 0`)
    }
  }

  return (
    <div className={`project project-${side}`} style={{ margin: marginStyle }}>
      <img
        ref={ref}
        className="projects-icons"
        src={`${ReadyImagesURL}/${icon}`}
        alt={name}
        onClick={handleClick}
      />
      <h2 style={{ margin: "0", fontSize: "2.5rem" }}>{name}</h2>
    </div>
  );
}
export interface ProjectProps {
  icon: string;
  name: string;
  side: string;
  link?: string;
}
