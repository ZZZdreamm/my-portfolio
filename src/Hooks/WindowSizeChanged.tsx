import { useEffect, useState } from "react";

export default function UseWindowSize(callback:any) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  useEffect(()=>{
    if(!callback) return
    if(!windowSize) return
    callback(windowSize)
  },[windowSize])

  return windowSize;
}
