import { useEffect, useState } from "react";
import MySkill from "../MySkill";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";
import FlowerSkills from "../FlowerSkills";

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

  return (
    <div
      className="mySkills-container flex-center full-width fadeIn from-bottom"
      style={{ position: "relative" }}
    >
      <div className="fullSize flex-center" style={{ position: "relative" }}>
        <FlowerSkills skillsType={skillsType} setSkillsType={setSkillsType} />
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
