import "./style.scss";

interface FlowerSkillsProps {
  setSkillsType: any;
}

export default function FlowerSkills({ setSkillsType }: FlowerSkillsProps) {
  function changeSkillsType(element: any, type: string, color: string) {
    const allElements = document.querySelectorAll(".skills-image");
    allElements.forEach((element) => {
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.remove("blue3");
      element.classList.remove("yellow");
    });
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
    <div className="svg-container rotate">
      <div
        id="skills-image-1"
        className="skills-image skills-image-1"
        onClick={(e) => changeSkillsType(e.target, "Frontend skills", "blue3")}
      ></div>
      <div
        id="skills-image-2"
        className="skills-image skills-image-2"
        onClick={(e) => changeSkillsType(e.target, "Frontend skills", "blue3")}
      ></div>
      <div
        id="skills-image-3"
        className="skills-image skills-image-3"
        onClick={(e) => changeSkillsType(e.target, "Frontend skills", "blue3")}
      ></div>

      <div
        id="skills-image-4"
        className="skills-image skills-image-5"
        onClick={(e) => changeSkillsType(e.target, "Backend skills", "green")}
      ></div>
      <div
        id="skills-image-5"
        className="skills-image skills-image-6"
        onClick={(e) => changeSkillsType(e.target, "Backend skills", "green")}
      ></div>
      <div
        id="skills-image-6"
        className="skills-image skills-image-7"
        onClick={(e) => changeSkillsType(e.target, "Backend skills", "green")}
      ></div>
      <div
        className="skills-image skills-image-4"
        onClick={(e) => changeSkillsType(e.target, "Known bonus tools", "red")}
      ></div>
      <div
        className="skills-image skills-image-8 yellow"
        onClick={(e) => changeSkillsType(e.target, "About skills", "yellow")}
      ></div>
    </div>
  );
}
