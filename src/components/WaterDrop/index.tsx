import { useEffect } from "react";
import "./style.scss";
export default function WaterDrop() {
  useEffect(() => {
    const waterDropContainer = document.getElementById("waterDropContainer");

    const waterDrop = document.createElement("div");
    waterDrop.classList.add("drop");
    waterDrop.classList.add("move");
    waterDropContainer!.appendChild(waterDrop);

    for (let index = 0; index < 5; index++) {
      setTimeout(() => {
        const wave = document.createElement("div");
        wave.classList.add("wave");
        wave.classList.add("move");
        waterDropContainer!.appendChild(wave);
      }, 1000 * index + 1);
    }
  }, []);

  return <div id="waterDropContainer" className="waterDropContainer"></div>;
}
