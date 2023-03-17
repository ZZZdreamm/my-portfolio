import { useRef } from "react";
import { ObserverIsVisible } from "./ObserverIsVisible";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender";

export default function MyProjects() {
  useEffectAfterSecondRender(() => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      const numSteps = 20.0;

      const projectsSection = document.getElementById("projects-section");
      window.addEventListener(
        "load",
        (event) => {
          createObserver(projectsSection);
        },
        false
      );
    }
  }, []);
  function createObserver(element: any) {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  }
  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }
  let prevRatio = 0.0;
  let increasingColor = "rgba(40, 40, 190, ratio)";
  let decreasingColor = "rgba(190, 40, 40, ratio)";

  function handleIntersect(entries: any, observer: any) {
    const aboutme = document.getElementById("about");
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
        aboutme!.style.backgroundColor = increasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
        aboutme!.style.backgroundColor = decreasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      }

      prevRatio = entry.intersectionRatio;
    });
  }
  return (
    <>
        <span id="refMyProjects"></span>
      <div id="projects-section" className="my-projects change-color">
        <h1 style={{marginTop:'100px'}}>Links to my projects and Linkedin</h1>
        <h3>Most of my projects are only on Github</h3>
        <h4>My Linkedin</h4>
        <a href="https://www.linkedin.com/in/kacper-multan-320301243" style={{cursor:'pointer', color:'white'}}>https://www.linkedin.com/in/kacper-multan-320301243</a>
        <h4>My Github</h4>
        <a href="https://github.com/ZZZdreamm?tab=repositories" style={{cursor:'pointer', color:'white'}}>https://github.com/ZZZdreamm?tab=repositories</a>
        <h4>My Website</h4>
        <a href="https://zzzdreamm.github.io/Facebug/" style={{cursor:'pointer', color:'white'}}>https://zzzdreamm.github.io/Facebug/</a>
      </div>
    </>
  );
}
