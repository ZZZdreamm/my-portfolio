import { useEffect, useRef } from "react";
import useIsInViewport from "../../../Hooks/IsInViewPort";
import { ReadyImagesURL } from "../../../services/publicPaths";
import HrefButton from "../../../utils/HrefButton";
import "./style.scss";
import UseWindowSize from "../../../Hooks/WindowSizeChanged";

export default function Project({
  side = "left",
  description,
  icon,
  name,
  link,
  hoverImage,
  setHoveredImage,
}: ProjectProps) {
  const ref = useRef<HTMLImageElement>(null);
  const windowSize = UseWindowSize(() => {});

  var scrolledToAbout = useIsInViewport(ref, "100px");
  useEffect(() => {
    if (scrolledToAbout === undefined) return;
    blurEffect(ref.current, scrolledToAbout);
  }, [scrolledToAbout]);

  function blurEffect(blurImg: any, ifIn: boolean) {
    if (ifIn) {
      setTimeout(() => {
        blurImg.classList.remove("blur");
      }, 200);
    } else {
      setTimeout(() => {
        blurImg.classList.add("blur");
      }, 200);
    }
  }
  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <div className={`project fadeIn from-${side}`}>
      {windowSize > 576 ? (
        <>
          {side === "left" ? (
            <>
              <div className="project-image">
                <img
                  ref={ref}
                  className="projects-icons"
                  src={`${ReadyImagesURL}/${icon}`}
                  alt={name}
                  onMouseEnter={(e) => {
                    setHoveredImage(hoverImage);
                  }}
                  onTouchMove={(e) => {
                    setHoveredImage(hoverImage);
                  }}
                  onMouseLeave={(e) => {
                    setHoveredImage([]);
                  }}
                  onMouseOut={(e) => {
                    setHoveredImage([]);
                  }}
                  onBlur={(e) => {
                    setHoveredImage([]);
                  }}
                  onClick={handleClick}
                />
              </div>
              <div className="project-info">{description}</div>
              <div className="project-name medium-font">{name}</div>
              <div className="project-goTo">
                <HrefButton link={link!} />
              </div>
            </>
          ) : (
            <>
              <div className="project-info">{description}</div>
              <div className="project-image">
                <img
                  ref={ref}
                  className="projects-icons"
                  src={`${ReadyImagesURL}/${icon}`}
                  alt={name}
                  onMouseEnter={() => {
                    setHoveredImage(hoverImage);
                  }}
                  onTouchMove={() => {
                    setHoveredImage(hoverImage);
                  }}
                  onMouseLeave={() => {
                    setHoveredImage([]);
                  }}
                  onMouseOut={() => {
                    setHoveredImage([]);
                  }}
                  onBlur={() => {
                    setHoveredImage([]);
                  }}
                  onClick={handleClick}
                />
              </div>
              <div className="project-goTo right">
                <HrefButton link={link!} />
              </div>
              <div className="project-name medium-font">{name}</div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="project-image">
            <img
              ref={ref}
              className="projects-icons"
              src={`${ReadyImagesURL}/${icon}`}
              alt={name}
              onMouseEnter={(e) => {
                setHoveredImage(hoverImage);
              }}
              onTouchMove={(e) => {
                setHoveredImage(hoverImage);
              }}
              onMouseLeave={(e) => {
                setHoveredImage([]);
              }}
              onMouseOut={(e) => {
                setHoveredImage([]);
              }}
              onBlur={(e) => {
                setHoveredImage([]);
              }}
              onClick={handleClick}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15% 1rem 5% 1rem",
            }}
          >
            <span
              style={{ textAlign: "left" }}
              className="project-name medium-font"
            >
              {name}
            </span>
            <span className="project-goTo">
              <HrefButton link={link!} />
            </span>
          </div>
          <div className="project-info">{description}</div>
        </>
      )}
    </div>
  );
}
export interface ProjectProps {
  side: string;
  icon: string;
  name: string;
  description: string;
  link?: string;
  hoverImage: string[];
  setHoveredImage: (images: string[]) => void;
}
