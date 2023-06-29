import AboutMeDescription from "../../components/AboutMeParts/AboutMeDescription";
import AboutMeSkills from "../../components/AboutMeParts/AboutMeSkills";
import "./style.scss";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="about-me">
        <div className="about-me-text">
          <div className="about-story">
            <AboutMeDescription />
            <AboutMeSkills />
          </div>
        </div>
      </div>
    </>
  );
}
