import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { gsap } from "gsap";
import useIsInViewport from "../../../Hooks/IsInViewPort";

export default function EnterFromLeft({ children }: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [first, setFirst] = useState(false);

  var scrolledPageBottom = useIsInViewport(refContainer, "0px");
  useEffect(() => {
    if (scrolledPageBottom && !first) {
      setFirst(true);
      gsap.fromTo(
        ".enter-container-left",
        { xPercent: -100 },
        { xPercent: 0, duration: 1.5}
      );
    }
  }, [scrolledPageBottom]);
  return (
    <div ref={refContainer} className="enter-container-left">
      {children}
    </div>
  );
}
