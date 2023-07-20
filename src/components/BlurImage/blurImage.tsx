import { BlurEffectImage } from "../HamburgerBar/barImages";
import "./styles.scss";
import { useEffect } from "react";

// interface blurImageProps{
//   src: string;
// }
const BlurImage = ({ currentImage, previousImage } : any) => {
  useEffect(() => {
    // const effect = new hoverEffect({
    //   parent: document.querySelector(`#blurImage`),
    //   intensity: 0.3,
    //   image1: previousImage,
    //   image2: currentImage,
    //   displacementImage: BlurEffectImage,
    //   imagesRatio: 380 / 300,
    // });
    if(!currentImage) return
    const blur = document.querySelector(`#blur`) as HTMLElement;
    blur.style.filter = `blur(10px)`;
    blur.style.opacity = `1`;
    setTimeout(() => {
      blur.style.filter = `blur(0px)`;
      blur.style.opacity = `0`;
    }, 250);


  }, [currentImage]);
  return (
    <div id={`blurImage`} className="blurImage">
      <img className="mainImage" src={currentImage} alt="" />
      <img className="previousImage" src={previousImage} alt="" />
      <img id="blur" className="blurredEffect" src={BlurEffectImage} alt="" />
    </div>
  );
};

export default BlurImage;
