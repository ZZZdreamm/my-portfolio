import "./style.scss";
import { ReadyImagesURL } from "../../publicPaths";
import { useEffect, useRef, useState } from "react";
import LiquidImage from "../../components/_common/SmokeLiquidEffect/LiquidImage";
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
    }, 1200);
    return () => clearInterval(interval);
  }, [imageRef, images]);

  useEffect(() => {
    if (!images) return;
    setCurrentImageIndex(0);
  }, [images]);


  return (
    <div className="infiniteScrollingImages">
      <div id="following-image" className="following-image">
        <LiquidImage
          image={`${ReadyImagesURL}/${images[currentImageIndex]}`}
          previousImage={`${ReadyImagesURL}/${
            images[
              currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1
            ]
          }`}
        />
      </div>
    </div>
  );
}
