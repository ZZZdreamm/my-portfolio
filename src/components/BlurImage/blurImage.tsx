import { BlurEffectImage, Image1, Image2 } from "../HamburgerBar/barImages";
import "./styles.scss";
import { useEffect, useState } from "react";

const BlurImage = ({ currentImage }: any) => {
  const [shownImage, setShownImage] = useState();
  useEffect(() => {
    if (!currentImage) return;
    if (shownImage == currentImage) return;
    const blur = document.querySelector(`.mainImage`) as HTMLElement;
    blur.style.filter = `blur(0px)`;
    blur.style.opacity = `1`;
    setTimeout(() => {
      blur.style.filter = `blur(10px)`;
      blur.style.opacity = `0.25`;
      setShownImage(currentImage);
      setTimeout(() => {
        blur.style.filter = `blur(0px)`;
        blur.style.opacity = `1`;
      }, 500);
    }, 500);
  }, [currentImage]);

  return (
    <div id={`blurImage`} className="blurImage">
      <img className="mainImage" src={shownImage} alt="" />
    </div>
  );
};

export default BlurImage;
