import { ReadyImagesURL } from "../../publicPaths";
import "./style.scss";

interface HrefButtonProps {
  link: string;
}

export default function HrefButton({ link }: HrefButtonProps) {
  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <span className="hrefButton">
      <img
        style={{ transform: "rotate(45deg)" }}
        src={`${ReadyImagesURL}/svg-arrow.svg`}
        onClick={handleClick}
        alt=""
      />
    </span>
  );
}
