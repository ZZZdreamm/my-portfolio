import Slider from "../Slider";
import { useEffect } from "react";

export default function MultiSliders() {
  const amountOfSliders = 2;

  
  return (
    <>
      {Array.from(Array(amountOfSliders).keys()).map((i) => (
        <Slider />
      ))}
    </>
  );
}
