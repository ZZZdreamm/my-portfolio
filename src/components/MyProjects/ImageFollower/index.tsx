import InfiniteScrollingImages from "../../../utils/InfiniteScrollingImages";
import MouseFollower from "../../../utils/MouseFollower";
import { BodyPortal } from "../../../utils/Portal";
import "./style.scss";
interface ImageFollowerProps {
  projectImages: string[];
}

export default function ImageFollower({ projectImages }: ImageFollowerProps) {
  const visible = projectImages && projectImages.length > 0 ? "block" : "none";
  return (
    <BodyPortal>
      <div style={{ display: visible }}>
        <MouseFollower
          children={<InfiniteScrollingImages images={projectImages} />}
          classHover="projects-icons"
        />
      </div>
    </BodyPortal>
  );
}
