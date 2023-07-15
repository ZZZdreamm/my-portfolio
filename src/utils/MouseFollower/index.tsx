import { useEffect, useState } from "react";
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
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains(`${classHover}`)) {
        setDisplay("none");
      } else {
        setDisplay("block");
      }
      xTo(e.clientX);
      yTo(e.clientY);
    });
    window.addEventListener("touchmove", (e) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains(`${classHover}`)) {
        setDisplay("none");
      } else {
        setDisplay("block");
      }
      xTo(e.touches[0].clientX);
      yTo(e.touches[0].clientY);
    });

  }, []);


  return (
    <>
      {children && (
        <div style={{ display: display }} className="ball">
          {children}
        </div>
      )}
    </>
  );
}
