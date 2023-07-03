import { useState } from "react";
import "./style.scss";
import { gsap } from "gsap";

interface MouseFollowerProps {
  children?: any;
  classHover?: string;
}

export default function MouseFollower({
  children,
  classHover,
}: MouseFollowerProps) {
  const [display, setDisplay] = useState('none');
  // gsap.set(".following-image", { xPercent: -50, yPercent: -50 });

  // let xTo = gsap.quickTo(`.following-image`, "x", {
  //     duration: 0,
  //     ease: "power3",
  //   }),
  //   yTo = gsap.quickTo(`.following-image`, "y", { duration: 0, ease: "power3" });

  // window.addEventListener("mousemove", (e) => {
  //   // xTo(e.pageX);
  //   // yTo(e.pageY);
  //   const target = e.target as HTMLElement;
  //   console.log(target.classList)
  //   // if (!target.classList.contains(`${classHover}`)) return
  //   xTo(e.pageX);
  //   yTo(e.pageY);
  // });
  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains(`${classHover}`)){
      setDisplay('none')
      return
    }
    setDisplay('block')
    xTo(e.clientX);
    yTo(e.clientY);
  });
  return <div style={{display:display}} className="ball">{children}</div>;
}
