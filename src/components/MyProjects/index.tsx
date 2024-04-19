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
    icon: "tradeiti-logo.png",
    name: "TradEiti",
    link: "https://github.com/ZZZdreamm/Tradeiti",
    description:
      "TradEITI is a web application designed to facilitate the exchange of class hours among students. The problem I have encountered during my first year of studies was the lack of an available platform for exchanging class hours between students.",
    hoverImage: ["tradeiti1.png", "tradeiti2.png", "tradeiti3.png"],
    side: "right",
  },
  {
    icon: "kahoot-icon.webp",
    name: "Kahoot like game",
    link: "https://zzzdreamm.github.io/Cacarrot/",
    description:
      "A game that allows you to create and play quizzes with others",
    hoverImage: ["cacarrot-1.png", "cacarrot-2.png", "cacarrot-3.jpg"],
    side: "left",
  },

  {
    icon: "news-icon.png",
    name: "News app",
    link: "https://hot-news-cyan.vercel.app/",
    description:
      "A news app which allows searching internet for most recent news on topic of your choice.",
    hoverImage: ["hot-news-1.png", "hot-news-2.png", "hot-news-3.png"],
    side: "right",
  },
  {
    icon: "nestjs-icon.jpg",
    name: "NestJS server",
    link: "https://github.com/ZZZdreamm/nestJS-server",
    description:
      "A backend server in Node.js using NestJS framework used for all apps that were mentioned before.",
    hoverImage: [
      "nestjs-icon3.jpg",
      "firebase-icon.png",
      "jwttoken.png",
      "swagger-icon.jpg",
    ],
    side: "left",
  },
  {
    icon: "reserve-it.png",
    name: "ReserveIT",
    link: "https://github.com/ZZZdreamm/ReserveIT",
    description: "A reservation system for an online classes for students",
    hoverImage: ["reserveit-1.png", "reserveit-2.png", "reserveit-3.png"],
    side: "right",
  }
];
export default function MyProjects() {
  const [hoveredImage, setHoveredImage] = useState<string[]>([]);

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
