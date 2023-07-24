import { useEffect, useRef, useState } from "react";
import { ReadyImagesURL } from "../../publicPaths";
import "./imageStyle.scss";
export default function LiquidImage({ image, previousImage }: any) {
  const imageRef = useRef<HTMLDivElement>(null);
  const previousImageRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState(image);
  useEffect(()=> {
    if(!previousImageRef.current) return;
    previousImageRef.current?.addEventListener("animationend", (event) => {
      previousImageRef.current?.classList.remove("change");
      previousImageRef.current?.style.setProperty("animation-play-state", "paused");
    });
  },[])
  useEffect(() => {
    if (!imageRef.current) return;
    if (!previousImageRef.current) return;
    if (!image) return;
    previousImageRef.current?.style.setProperty("animation-play-state", "running");
    previousImageRef.current?.classList.remove("change");
    previousImageRef.current.classList.add("change");
    setCurrentImage(image);
  }, [image]);
  return (
    <div className="imageContainer-1">
      <div ref={previousImageRef} className="contentPrevious">
        <img className="content-current" src={previousImage} alt="" />
      </div>
      <div ref={imageRef} className="content">
        <img className="content-current" src={currentImage} alt="" />
      </div>
    </div>
  );
}
