import "./style.scss";
interface BackgroundProps {
    children?: React.ReactElement;
}

export default function Background({children}:BackgroundProps) {
  return <main className="background">{children}</main>;
}
