import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { gsap } from "gsap";
import useIsInViewport from "../../Hooks/IsInViewPort";

export default function EnterFromRight({ children }: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [first, setFirst] = useState(false);

  var scrolledPageBottom = useIsInViewport(refContainer, "0px");
  useEffect(() => {
    if (scrolledPageBottom && !first) {
      setFirst(true);
      gsap.fromTo(
        ".enter-container-right",
        { xPercent: 100 },
        { xPercent: 0, duration: 1}
      );
    }
  }, [scrolledPageBottom]);
  return (
    <div ref={refContainer} className="enter-container-right">
      {children}
    </div>
  );
}
