import { useNavigate } from "react-router-dom";
import { ReadyImagesURL } from "./publicPaths";
import { useEffect, useRef } from "react";

export default function Project({ icon, name, side, link }: ProjectProps) {
    const ref = useRef<HTMLImageElement>(null)
    useEffect(()=>{
        if(ref.current == null) return
        blurEffect(ref.current)
    },[])
  let style = {};
  if (side == "left") {
    style = {
      display: "flex",
      justifyContent: "space-between",
      alignItems:'center',
      position: "relative",
      right: "10%",
      marginTop:'15vh'
    };
  } else {
    style = {
      display: "flex",
      justifyContent: "space-between",
      alignItems:'center',
      position: "relative",
      left: "10%",
      marginTop:'15vh'
    };
  }
  function blurEffect(blurImg:any){
    if(blurImg){
      window!.addEventListener("load", ()=>{
        const options = {
          rootMargin: '0px',
          threshold: 1.0
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0){
              blurImg!.classList.remove('blur');
            }else{
              blurImg!.classList.add('blur');
            }
          });
        }, options);
      observer.observe(blurImg);
      },false);
    }
  }
  return (
    //@ts-ignore
    <div style={style}>
        {side == 'right' &&  <h4 style={{marginRight:'6vw'}}>{name}</h4>}
        <div>
      <a href={link}>
         <img ref={ref} className="projects-icons" src={`${ReadyImagesURL}/${icon}`} />
      </a>

      </div>
      {side == 'left' &&  <h4 style={{marginLeft:'6vw'}}>{name}</h4>}
    </div>
  );
}
export interface ProjectProps {
  icon: string;
  name: string;
  side: string;
  link?: string;
}
