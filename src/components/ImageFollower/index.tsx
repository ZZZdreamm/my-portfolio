import { ReadyImagesURL } from "../../publicPaths";
import MouseFollower from "../../utils/MouseFollower";
import InfiniteScrollingImages from "../../utils/InfiniteScrollingImages";
import "./style.scss";
interface ImageFollowerProps {
  projectImages: string[];
}

export default function ImageFollower({ projectImages }: ImageFollowerProps) {
  return (
    <>
      {projectImages && projectImages.length > 0 && (
        <MouseFollower
          children={<InfiniteScrollingImages images={projectImages} />}
          classHover="projects-icons"
        />
      )}
    </>
  );
}
