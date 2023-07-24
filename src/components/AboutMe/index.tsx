import AboutMeDescription from "./AboutMeParts/AboutMeDescription";
import AboutMeSkills from "./AboutMeParts/AboutMeSkills";
import "./style.scss";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="about-me">
        <div className="about-me-content">
          <div className="about-me-text">
            <div className="about-story">
              <AboutMeDescription />
              <AboutMeSkills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
