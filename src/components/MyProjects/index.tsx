import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import ImageFollower from "./ImageFollower";
import Project from "./Project";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });
ScrollTrigger.normalizeScroll(true);

const myProjects = [
  {
    icon: "social-media-icon.png",
    name: "Social media app",
    link: "https://zzzdreamm.github.io/social-app/",
    description:
      "A social media app that allows you to post and comment, like, dislike, and delete posts.",
    hoverImage: [
      "social-app3.png",
      "friendLink-3.jpg",
      "friendLink-1.png",
      "friendLink-2.jpg",
    ],
    side: "left",
  },
  {
    icon: "kahoot-icon.webp",
    name: "Kahoot like game",
    link: "https://zzzdreamm.github.io/Cacarrot/",
    description:
      "A game that allows you to create and play quizzes with others",
    hoverImage: ["cacarrot-1.png", "cacarrot-2.png", "cacarrot-3.jpg"],
    side: "right",
  },

  {
    icon: "news-icon.png",
    name: "News app",
    link: "https://hot-news-cyan.vercel.app/",
    description:
      "A news app which allows searching internet for most recent news on topic of your choice.",
    hoverImage: ["hot-news-1.png", "hot-news-2.png", "hot-news-3.png"],
    side: "left",
  },
];
export default function MyProjects() {
  const [hoveredImage, setHoveredImage] = useState<string[]>([]);
  // useEffect(() => {
  //   let sections = gsap.utils.toArray(".project");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".my-projects",
  //       pin: true,
  //       scrub: 1,
  //       // snap: 1,
  //       start: "top top",
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       //@ts-ignore
  //       end: () => "+=" + document.querySelector(".my-projects").offsetWidth,
  //     },
  //   });
  // }, []);

  return (
    <>
      <ImageFollower projectImages={hoveredImage} />
      <span id="projects"></span>
      <div className="my-projects change-color">
        {myProjects &&
          myProjects.map((project) => (
            <Project
              key={project.name}
              icon={project.icon!}
              name={project.name}
              link={project.link}
              description={project.description}
              setHoveredImage={setHoveredImage}
              hoverImage={project.hoverImage}
              side={project.side}
            />
          ))}
        <div
          style={{ height: "7rem" }}
          className="full-width very-large-font bold-font"
        ></div>
      </div>
    </>
  );
}