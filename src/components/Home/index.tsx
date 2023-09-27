import { useEffect, useState } from "react";
import Portal from "../../utils/Portal";
import BubbleEffect from "./BubbleEffect";
import "./style.scss";

export default function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  return (
    <div id="home" className="front-page">
      <div className="front-page-con">
        <Portal>
          <div className="bubblesContainer">
            <BubbleEffect
              color="#a8e6cf"
              position={{ right: "20vw", top: "20vh" }}
            ></BubbleEffect>
            <BubbleEffect
              color="#e4dfb7"
              position={{ left: "20vw", top: "80vh" }}
              expandMore={true}
            ></BubbleEffect>
          </div>
        </Portal>

        <div className="front-page-content">
          <div className="front-page-content__text fadeIn from-right">
            <h2
              className="front-page-content__text__inner"
              style={{ textAlign: "end" }}
            >
              <span>FOLIO OF KACPER</span>
            </h2>
          </div>
          <div className="front-page-content__text fadeIn from-left">
            <h2
              className="front-page-content__text__inner"
              style={{ textAlign: "start" }}
            >
              <span>CLEAR CODE</span>
            </h2>
          </div>
          <div className="front-page-content__text fadeIn from-right">
            <h2
              className="front-page-content__text__inner"
              style={{ textAlign: "end" }}
            >
              <span>NICE DESIGN</span>
            </h2>
          </div>
          <div className="front-page-content__text fadeIn from-left">
            <h2
              className="front-page-content__text__inner"
              style={{ textAlign: "start" }}
            >
              <span>Frontend Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
