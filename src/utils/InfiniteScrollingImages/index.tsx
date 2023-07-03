import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
import { useEffect, useRef, useState } from "react";
interface InfiniteScrollingImagesProps {
  images: string[];
}

export default function InfiniteScrollingImages({
  images,
}: InfiniteScrollingImagesProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      imageRef.current?.classList.remove("fade-in");

      setCurrentImageIndex((currentIndex) => {
        return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      });
      if (!imageRef.current) return;
      fade(imageRef.current)

      // imageRef.current?.classList.add("fade-in");
    }, 2000);
    return () => clearInterval(interval);
  }, [imageRef, images]);

  useEffect(() => {
    if (!images) return;
    setCurrentImageIndex(0);
  }, [images]);
  console.log(currentImageIndex);
  console.log(images[currentImageIndex]);



  function fade(element: any) {
    var i = 0;
    element.style.opacity = 0;
    var k = window.setInterval(function() {
      if (i >= 20) {
        clearInterval(k);
      } else {
        element.style.opacity = i / 20 + 0.05;
        i++;
      }
    }, 50);
  };
  return (
    <div className="infiniteScrollingImages">
      <div id="following-image" className="following-image">
        <img
          ref={imageRef}
          src={`${ReadyImagesURL}/${images[currentImageIndex]}`}
          alt=""
        />
      </div>
    </div>
  );
}
