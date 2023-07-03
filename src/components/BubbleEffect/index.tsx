import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../Hooks/IsInViewPort";
import "./style.scss";

interface BubbleEffectProps {
  color: string;
  position: any;
  children?: React.ReactElement;
  expandMore?: boolean;
}
export default function BubbleEffect({
  color,
  position,
  children,
  expandMore,
}: BubbleEffectProps) {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    refContainer.current?.classList.add("bubbleEffect");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  useEffect(() => {
    if (!expandMore) return;
    window.addEventListener("scroll", expandOnScrollDown);
  }, [expandMore]);

  function expandOnScrollDown() {
    const container = refContainer.current as HTMLDivElement;
    if (!expandMore) return;
    if(!container) return;
    if (window.scrollY > 0) {
      container.classList.add("bubbleEffectExpand");
    } else {
      container.classList.remove("bubbleEffectExpand");
    }
  }
  return (
    <div
      ref={refContainer}
      className="bubble"
      style={{ backgroundColor: color, ...position }}
    >
      {children}
    </div>
  );
}
