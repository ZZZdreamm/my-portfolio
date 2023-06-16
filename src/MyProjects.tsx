import { useEffect, useRef } from "react";
import { ObserverIsVisible } from "./ObserverIsVisible";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender";
import GoBack from "./GoBack";
import ThreePhoto from "./ThreePhoto";
import * as THREE from "three";
import { ReadyImagesURL } from "./publicPaths";
import { useNavigate } from "react-router-dom";
import Project, { ProjectProps } from "./Project";

export default function MyProjects() {
  const navi = useNavigate();
  const myProjects = [
    {
      icon: "kahoot.png",
      name: "Kahoot like game",
      side: "left",
      link: "https://zzzdreamm.github.io/Cacarrot/",
    },
    {
      icon: "social_media.webp",
      name: "Social media app",
      side: "right",
      link: "https://zzzdreamm.github.io/Facebug/",
    },

  ];
  return (
    <>
      <span id="refMyProjects"></span>
      <div className="my-projects change-color">
        <h1 style={{ marginTop: "100px" }}>
          Some of my projects are right below
        </h1>
        <h3>But anyway most of my projects are only on Github</h3>

        {myProjects.map((project) => (
          <Project
            icon={project.icon}
            name={project.name}
            side={project.side}
            link={project.link}
          />
        ))}
      </div>
      <GoBack />
    </>
  );
}
