import { useEffect, useState } from "react";
import Project from "../../components/Project";
import RotatingElement from "../../components/RotatingElement";
import "./style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageFollower from "../../components/ImageFollower";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });
ScrollTrigger.normalizeScroll(true)


const myProjects = [
  {
    icon: "kahoot-icon.webp",
    name: "Kahoot like game",
    side: "left",
    link: "https://zzzdreamm.github.io/Cacarrot/",
    description:
      "A game that allows you to create and play quizzes with others",
    hoverImage: "cacarrot-1.png",
  },
  {
    icon: "social-media-icon.png",
    name: "Social media app",
    side: "right",
    link: "https://zzzdreamm.github.io/social-app/",
    description:
      "A social media app that allows you to post and comment, like, dislike, and delete posts.",
    hoverImage: "friendLink-1.png",
  },
];
export default function MyProjects() {
  const [hoveredImage, setHoveredImage] = useState("");
  useEffect(() => {
    // let tl = gsap.timeline({
    //   // yes, we can add it to an entire timeline!
    //   scrollTrigger: {
    //     trigger: ".my-projects",
    //     pin: true, // pin the trigger element while active
    //     start: "top top", // when the top of the trigger hits the top of the viewport
    //     end: "top 100px", // end after scrolling 500px beyond the start
    //     scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     snap: {
    //       snapTo: "labels", // snap to the closest label in the timeline
    //       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //       ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    //     },
    //   },
    // });





    const tl = gsap.timeline();
    tl.from("project-1", { yPercent: -100 }).from("project-2", {
      yPercent: 100,
    });
    let sections = gsap.utils.toArray(".project");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".my-projects",
        pin: true,
        scrub: 1,
        snap: 1,
        start: "top top",
        anticipatePin:3,
        // base vertical scrolling on how wide the container is so it feels more natural.
        //@ts-ignore
        end: () => "+=" + document.querySelector(".my-projects").offsetWidth,
      },
    });




  }, []);

  return (
    <>
      <ImageFollower projectImage={hoveredImage} />
      <span id="projects"></span>
      <div
        className="my-projects change-color"
        style={{
          gridTemplateColumns: `repeat(${myProjects.length}, 100vw)`,
        }}
      >
        {myProjects.map((project) => (
          <>
            <Project
              key={project.name}
              icon={project.icon!}
              name={project.name}
              side={project.side!}
              link={project.link}
              description={project.description}
              setHoveredImage={setHoveredImage}
              hoverImage={project.hoverImage}
            />
          </>
        ))}
        <div
          style={{ height: "7rem" }}
          className="full-width very-large-font bold-font"
        ></div>
      </div>
    </>
  );
}
