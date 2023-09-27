import UseWindowSize from "../../../../Hooks/WindowSizeChanged";
import "./style.scss";

interface FlowerSkillsProps {
  skillsType: string;
  setSkillsType: (type: string) => void;
}

export default function FlowerSkills({
  skillsType,
  setSkillsType,
}: FlowerSkillsProps) {
  const windowSize = UseWindowSize(resizePetals);
  function changeSkillsType(element: any, type: string, color: string) {
    const allElements = document.querySelectorAll(".skills-image");
    const lastPetal = document.querySelector(".skills-image-8") as HTMLElement;
    allElements.forEach((element) => {
      //@ts-ignore
      element.style.pointerEvents = "none";
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
    if (skillsType != type) {
      hideAndStretchPetals();
      setSkillsType(type);
    } else {
      allElements.forEach((element) => {
        //@ts-ignore
        element.style.pointerEvents = "all";
      });
      lastPetal.style.pointerEvents = "all";
    }
  }

  function hideAndStretchPetals() {
    const petalElements = document.querySelectorAll(
      ".petal"
    ) as NodeListOf<HTMLElement>;
    const lastPetal = document.querySelector(".skills-image-8") as HTMLElement;

    petalElements.forEach((petal, index) => {
      const petalStyles = petals[index].style;
      petal.style.left = "37.5%";
      petal.style.bottom = "37.5%";
      petal.style.width = "25%";
      petal.style.height = "25%";
      setTimeout(() => {
        petal.style.left = petalStyles.left;
        petal.style.bottom = petalStyles.bottom;
        petal.style.width = petalStyles.width;
        petal.style.height = petalStyles.height;
        petal.style.pointerEvents = "all";
      }, 300);
    });
    setTimeout(() => {
      lastPetal.style.pointerEvents = "all";
    }, 300);
  }

  const petals = [
    {
      style: {
        left: "-10%",
        bottom: "0%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Frontend skills",
      colorOnClick: "blue3",
    },
    {
      style: {
        left: "60%",
        bottom: "0%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Frontend skills",
      colorOnClick: "blue3",
    },
    {
      style: {
        left: "25%",
        bottom: "65%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Frontend skills",
      colorOnClick: "blue3",
    },
    {
      style: {
        left: "25%",
        bottom: "-15%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Backend skills",
      colorOnClick: "green",
    },
    {
      style: {
        left: "-12.5%",
        bottom: "40%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Backend skills",
      colorOnClick: "green",
    },
    {
      style: {
        left: "62.5%",
        bottom: "40%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Backend skills",
      colorOnClick: "green",
    },
    {
      style: {
        left: "25%",
        bottom: "25%",
        width: "50%",
        height: "50%",
      },
      skillsType: "Known bonus tools",
      colorOnClick: "red",
    },
  ];

  function resizePetals() {
    const petalsElements = document.querySelectorAll(
      ".petal"
    ) as NodeListOf<HTMLElement>;
    petalsElements.forEach((petal, index) => {
      const petalPosition = petals[index].style;
      petal.style.left = petalPosition?.left;
      petal.style.bottom = petalPosition?.bottom;
      petal.style.width = petalPosition?.width;
      petal.style.height = petalPosition?.height;
    });
  }
  return (
    <div className="svg-container rotate">
      {petals.map((petal, index) => (
        <div
          id={`skills-image-${index + 1}`}
          className={`skills-image skills-image-${index + 1} petal`}
          onClick={(e) =>
            changeSkillsType(e.target, petal.skillsType, petal.colorOnClick)
          }
        ></div>
      ))}
      <div
        className="skills-image skills-image-8 yellow"
        onClick={(e) => changeSkillsType(e.target, "About skills", "yellow")}
      ></div>
    </div>
  );
}
