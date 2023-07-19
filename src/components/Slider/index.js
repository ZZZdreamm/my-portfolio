import "./styles.scss";

export default function Slider() {
    const numberOfSlides = 20;
  return (
    <div class="slider">
      <div class="slide-track">
        {Array.from(Array(numberOfSlides).keys()).map((i) => (
            <div class="slide">PROJECTS!!!</div>
        ))}
      </div>
    </div>
  );
}
