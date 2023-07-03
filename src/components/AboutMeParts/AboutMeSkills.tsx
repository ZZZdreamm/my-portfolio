import { useEffect, useState } from "react";
import MySkill from "../MySkill";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";

export default function AboutMeSkills() {
  const [mySkills, setMySkills] = useState<any>();
  const [skillsType, setSkillsType] = useState("About skills");

  useEffect(() => {
    if (skillsType == "Frontend skills") {
      setMySkills(frontendSkills);
    } else if (skillsType == "Backend skills") {
      setMySkills(backendSkills);
    } else if (skillsType == "Known bonus tools") {
      setMySkills(knownTools);
    }
  }, [skillsType]);

  const frontendSkills = [
    { name: "React", icon: `${ReadyImagesURL}/react-icon.png` },
    { name: "Javascript", icon: `${ReadyImagesURL}/javascript-icon.png` },
    { name: "SCSS", icon: `${ReadyImagesURL}/scss-icon.png` },
    { name: "HTML5", icon: `${ReadyImagesURL}/html5-icon.png` },
    { name: "Typescript", icon: `${ReadyImagesURL}/typescript-icon.png` },
    { name: "Redux", icon: `${ReadyImagesURL}/redux-icon.png` },
  ];
  const backendSkills = [
    { name: "C#", icon: `${ReadyImagesURL}/c-sharp-icon.png` },
    { name: "Node.js", icon: `${ReadyImagesURL}/node-js-icon.png` },
    { name: "SQL", icon: `${ReadyImagesURL}/sql-icon.svg` },
  ];

  const knownTools = [
    { name: "Git", icon: `${ReadyImagesURL}/git-icon.png` },
    { name: "Firebase", icon: `${ReadyImagesURL}/firebase-icon.png` },
  ];

  function changeSkillsType(element: any, type: string, color: string) {
    const allElements = document.querySelectorAll(".skills-image");
    allElements.forEach((element) => {
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.remove("blue3");
      element.classList.remove("yellow");
    });
    console.log(element.id);
    if (
      element.id.includes("1") ||
      element.id.includes("2") ||
      element.id.includes("3")
    ) {
      const elements = document.querySelectorAll(
        "#skills-image-1, #skills-image-2, #skills-image-3"
      );
      elements.forEach((element) => {
        element.classList.add(color);
      });
    } else if (
      element.id.includes("4") ||
      element.id.includes("5") ||
      element.id.includes("6")
    ) {
      const elements = document.querySelectorAll(
        "#skills-image-4, #skills-image-5, #skills-image-6"
      );
      elements.forEach((element) => {
        element.classList.add(color);
      });
    }
    element.classList.add(color);
    setSkillsType(type);
  }

  return (
    <div
      className="mySkills-container flex-center full-width"
      style={{ position: "relative" }}
    >
      <div className="fullSize flex-center" style={{ position: "relative" }}>
        <div className="svg-container">
          <div
            id="skills-image-1"
            className="skills-image skills-image-1"
            onClick={(e) =>
              changeSkillsType(e.target, "Frontend skills", "blue3")
            }
          ></div>
          <div
            id="skills-image-2"
            className="skills-image skills-image-2"
            onClick={(e) =>
              changeSkillsType(e.target, "Frontend skills", "blue3")
            }
          ></div>
          <div
            id="skills-image-3"
            className="skills-image skills-image-3"
            onClick={(e) =>
              changeSkillsType(e.target, "Frontend skills", "blue3")
            }
          ></div>

          <div
            id="skills-image-4"
            className="skills-image skills-image-5"
            onClick={(e) =>
              changeSkillsType(e.target, "Backend skills", "green")
            }
          ></div>
          <div
            id="skills-image-5"
            className="skills-image skills-image-6"
            onClick={(e) =>
              changeSkillsType(e.target, "Backend skills", "green")
            }
          ></div>
          <div
            id="skills-image-6"
            className="skills-image skills-image-7"
            onClick={(e) =>
              changeSkillsType(e.target, "Backend skills", "green")
            }
          ></div>
          <div
            className="skills-image skills-image-4"
            onClick={(e) =>
              changeSkillsType(e.target, "Known bonus tools", "red")
            }
          ></div>
          <div
            className="skills-image skills-image-8 yellow"
            onClick={(e) =>
              changeSkillsType(e.target, "About skills", "yellow")
            }
          ></div>
        </div>
      </div>
      <div className="displayedSkills fullSize">
        <h1 className="about-header">{skillsType}</h1>
        <span className="about-story-skills">
          {skillsType == "About skills" ? (
            <div className="aboutSkills-text">
              Creating good website is like painting a picture. You need to
              choose the right colors, the right shapes and the right
              composition to achieve the best effect.
            </div>
          ) : (
            <>
              {mySkills &&
                mySkills.map((skill: any) => (
                  <MySkill
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
            </>
          )}
        </span>
      </div>
    </div>
  );
}
