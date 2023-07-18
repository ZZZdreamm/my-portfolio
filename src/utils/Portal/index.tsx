import ReactDOM from "react-dom";

export default function Portal({ children }: any) {
  if(!document.getElementById('scroll-container')) return <>{children}</>
  if (typeof document == "undefined") {
    return <>{children}</>;
  }
  return ReactDOM.createPortal(children, document.getElementById('scroll-container')!);
}
