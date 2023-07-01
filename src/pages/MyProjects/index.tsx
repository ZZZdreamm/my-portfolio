import Project from "../../components/Project";
import RotatingElement from "../../components/RotatingElement";
import "./style.scss";

export default function MyProjects() {
  const myProjects = [
    {
      icon: "kahoot-icon.webp",
      name: "Kahoot like game",
      side: "left",
      link: "https://zzzdreamm.github.io/Cacarrot/",
    },
    {
      name: "",
    },
    {
      icon: "social-media-icon.png",
      name: "Social media app",
      side: "right",
      link: "https://zzzdreamm.github.io/social-app/",
    },
  ];

  return (
    <>
      <span id="projects"></span>
      <div className="my-projects change-color">
        <div className="full-width very-large-font bold-font text-center">My Work</div>
        {myProjects.map((project) => (
          <>
            {project.name === "" ? (
              <RotatingElement />
            ) : (
              <Project
                key={project.name}
                icon={project.icon!}
                name={project.name}
                side={project.side!}
                link={project.link}
              />
            )}
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
