import { useEffect, useRef } from "react";
import useIsInViewport from "../../Hooks/IsInViewPort";
import "./style.scss";

export default function RotatingElement() {
  const spanRef = useRef(null);
  var scrolledToSpan = useIsInViewport(spanRef, "300px");
  useEffect(() => {
    if (!spanRef) return;
    if (scrolledToSpan) {
      // @ts-ignore
      spanRef.current!.classList.add("rotating-endless");
    }
  }, [scrolledToSpan]);
  return <span ref={spanRef} id="special-span" className="special-span"></span>;
}
