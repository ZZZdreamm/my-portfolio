import { ReadyImagesURL } from "../../publicPaths";
import MouseFollower from "../../utils/MouseFollower";
import "./style.scss";
interface ImageFollowerProps {
  projectImage: string;
}

export default function ImageFollower({ projectImage }: ImageFollowerProps) {
  console.log(projectImage)
  return (
    <MouseFollower
      children={
        <div id="following-image" className="following-image">
          <img src={`${ReadyImagesURL}/${projectImage}`} alt=""/>
        </div>
      }
      classHover="projects-icons"
    />
  );
}
