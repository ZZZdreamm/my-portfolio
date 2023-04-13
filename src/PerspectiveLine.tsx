import { useEffect, useRef, useState } from "react";
import { ReadyImagesURL } from "./publicPaths";

export default function PerspectiveLine({
  text,
  subtext,
  href,
  multiplier,
  transformation,
  imageURL
}: PerspectiveLineProps) {
    const refElement = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        if(refElement == null){
            return
        }
        const line = refElement.current as HTMLDivElement
        const element1 = line.childNodes[0] as HTMLSpanElement
        const element2 = line.childNodes[1] as HTMLSpanElement
        line.addEventListener('mouseover', ()=>{
            element1.classList.add('perspective-move')
            element2.classList.add('perspective-move')
        })
        line.addEventListener('mouseleave', ()=>{
            element1.classList.remove('perspective-move')
            element2.classList.remove('perspective-move')
        })
    },[])
      const  style = {
            left:`${65*multiplier}px`,
        };
  return (
    <div className={`perspective-line ${transformation}`} style={style} ref={refElement}>
      <p className="my-social text">{text}</p>
      <p className="my-social link">
        {href ? (
          <a
            className="social-ref"
            href={href}
          >
            {subtext}
          </a>
        ): subtext}
        {imageURL ? <img className="link-image" src={`${ReadyImagesURL}/${imageURL}`}/>: null}
      </p>
    </div>
  );
}

export interface PerspectiveLineProps {
  text: string;
  subtext: string;
  href?: string;
  multiplier: number;
  transformation?:string;
  imageURL?:string;
}
