import Slider from "../Slider";
import { useEffect } from "react";

export default function MultiSliders() {
  const amountOfSliders = 1;

  return (
    <>
      {Array.from(Array(amountOfSliders).keys()).map((i) => (
        <>
          <Slider direction={"left"} />
          <Slider direction={"right"} />
        </>
      ))}
    </>
  );
}
