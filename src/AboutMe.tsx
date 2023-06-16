import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ObserverIsVisible } from "./ObserverIsVisible";
import { ReadyImagesURL } from "./publicPaths";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender";
import GoBack from "./GoBack";
export default function AboutMe() {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    emailjs
      .sendForm(
        "service_7rv6lus",
        "template_qbxmgfj",
    //@ts-ignore
        form.current,
        "HyBgoYbq4MyHVTa3_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="about" className="about-me">
        <div className="about-me-text">
          <div className="about-front">
            <h2 className="about-front-text">
              I want to create and build digital products
            </h2>
          </div>
          <h1 id="about-header">About me</h1>
          <div className="about-story">
            <span className="about-story-text">
              I'm Kacper. My adventure with programming started like a year ago.
              I started trying many languages to see which one is most suitable
              for me.
            </span>
            <span className="about-story-text">
              I did some my own projects to upgrade my skills. Then started
              doing projects for studies on Warsaw University of Technology. Now
              I'm on second semester of first year of studies and I'm looking
              for job to increase my skills and get some experience with real,
              useful projects.
            </span>
            {/* <span
              className="about-story-text"
              style={{ marginBottom: "100px" }}
            >
              If you are looking for Javascript, C# or Python junior developer
              email me below.
            </span> */}
            <a
              id="resume-link"
              href="https://drive.google.com/file/d/1gcQ-NmrmqNT01nSIOfE8LAW7bV9S5svi/view?usp=sharing"
            >
              My Resume (pdf)
            </a>
          </div>
        </div>
        <GoBack />
      </div>
    </>
  );
}
