import Slider from "../Slider";

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
