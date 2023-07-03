import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../Hooks/IsInViewPort";
import { ReadyImagesURL } from "../../publicPaths";
import HrefButton from "../../utils/HrefButton";
import "./style.scss";
import UseWindowSize from "../../Hooks/WindowSizeChanged";

export default function Project({
  description,
  icon,
  name,
  link,
  hoverImage,
  setHoveredImage,
}: ProjectProps) {
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
    <div className={`project`}>
      <div className="project-image">
        <img
          ref={ref}
          className="projects-icons"
          src={`${ReadyImagesURL}/${icon}`}
          alt={name}
          onMouseEnter={(e) => {
            setHoveredImage(hoverImage);
          }}
          onTouchMove={(e) => {
            setHoveredImage(hoverImage);
          }}
          onTouchEnd={(e) => {
            setHoveredImage([]);
          }}
          onTouchCancel={(e) => {
            setHoveredImage([]);
          }}
          onMouseLeave={(e) => {
            console.log("leave");
            setHoveredImage([]);
          }}
          onMouseOut={(e) => {
            setHoveredImage([]);
          }}
          onBlur={(e) => {
            setHoveredImage([]);
          }}
          onClick={handleClick}
        />
      </div>

      <div className="project-info">{description}</div>
      <div className="project-name medium-font">{name}</div>
      <div className="project-goTo">
        <HrefButton link={link!} />
      </div>
    </div>
  );
}
export interface ProjectProps {
  icon: string;
  name: string;
  description: string;
  link?: string;
  hoverImage: string[];
  setHoveredImage: (images: string[]) => void;
}
