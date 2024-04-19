import styled from "styled-components";
import { ProjectProps } from "../../models/Project";
import Project from "./Project";

interface Props {
  project: ProjectProps;
  setHoveredImage: (images: string[]) => void;
  onClick: () => void;
  isChosen: boolean;
  rotation: number;
}

export function ProjectContainer({
  project,
  setHoveredImage,
  onClick,
  isChosen,
  rotation,
}: Props) {
  return (
    <Container onClick={onClick} isChosen={isChosen} rotation={rotation} backgroundColor={project.backgroundColor}>
      {isChosen && <Project setHoveredImage={setHoveredImage} {...project} />}
    </Container>
  );
}

const Container = styled.div<{
  isChosen: boolean;
  rotation: number;
  backgroundColor: string;
}>`
  display: flex;
  height: 100%;
  width: 70%;
  background-color: #000000;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) ${(props) => `rotate(${props.rotation}deg)`};
  z-index: ${(props) => (props.isChosen ? 10 : 1)};
  background-color: ${(props) => (props.backgroundColor)};
  /* &:hover {
        transform: scale(1.05);
    } */
`;
