import { useEffect, useState } from "react";
import MySkill from "../MySkill";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss"


export default function AboutMeSkills() {
  const [mySkills, setMySkills] = useState<any>();
  const [skillsType, setSkillsType] = useState("Frontend skills");

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
      element.classList.remove("yellow");
      element.classList.remove("green");
      element.classList.remove("blue");
    });
    element.classList.add(color);
    setSkillsType(type);
  }


  return (
    <p className="mySkills-container flex-center full-width" style={{position:'relative'}}>
      <div className="fullSize flex-center" style={{position:'relative'}}>
        <div className="svg-container">
          <div
            className="skills-image skills-image-3 yellow"
            onClick={(e) =>
              changeSkillsType(e.target, "Frontend skills", "yellow")
            }
          ></div>
          <div
            className="skills-image skills-image-1"
            onClick={(e) =>
              changeSkillsType(e.target, "Backend skills", "blue")
            }
          ></div>
          <div
            className="skills-image skills-image-2"
            onClick={(e) => changeSkillsType(e.target, "Known bonus tools", "green")}
          ></div>

          <div
            className="skills-image skills-image-4 fuschia"
          ></div>
        </div>
      </div>
      <div className="displayedSkills fullSize">
        <h1 id="about-header">{skillsType}</h1>
        <span className="about-story-skills" >
          {mySkills &&
            mySkills.map((skill: any) => (
              <MySkill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
        </span>
      </div>
    </p>
  );
}
