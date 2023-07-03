import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";
import WaterDrop from "../../components/WaterDrop";
import EnterFromLeft from "../../components/EnterOnScreen/EnterFromLeft";
import BubbleEffect from "../../components/BubbleEffect";
import EnterFromRight from "../../components/EnterOnScreen/EnterFromRight";
import Portal from "../../utils/Portal";

export default function FrontPage() {
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
          <EnterFromRight>
            <div className="front-page-content__text">
              <h1
                className="front-page-content__text__inner"
                style={{ textAlign: "end" }}
              >
                <span>FOLIO OF KACPER</span>
              </h1>
            </div>
          </EnterFromRight>
          <EnterFromLeft>
            <div className="front-page-content__text">
              <h1
                className="front-page-content__text__inner"
                style={{ textAlign: "start" }}
              >
                <span>CLEAR CODE</span>
              </h1>
            </div>
          </EnterFromLeft>

          <EnterFromRight>
            <div className="front-page-content__text">
              <h1
                className="front-page-content__text__inner"
                style={{ textAlign: "end" }}
              >
                <span>NICE DESIGN</span>
              </h1>
            </div>
          </EnterFromRight>

          <EnterFromLeft>
            <div className="front-page-content__text">
              <h1
                className="front-page-content__text__inner"
                style={{ textAlign: "start" }}
              >
                <span>Frontend Developer</span>
              </h1>
            </div>
          </EnterFromLeft>
        </div>
      </div>
    </div>
  );
}
