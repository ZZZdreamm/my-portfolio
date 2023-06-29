import { useEffect, useRef } from "react";
import useIsInViewport from "../../Hooks/IsInViewPort";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss"


export default function Project({ icon, name, side, link }: ProjectProps) {
  const ref = useRef<HTMLImageElement>(null);

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
  return (
    <div className={`project project-${side}`}>
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
