import { useRef } from "react"

export default function Home(){
    return(
      <>
      <span id="homeRef"></span>
        <div className="homepage">
      <div className="my-intro">
        <div className="my-name">Hi. I'm Kacper.</div>
        <div className="short-info-about-me">
          I'm freelancing programist and also student of first year at Warsaw
          University of Technology. Checkout my own projects and projects made
          during studies down below.
        </div>
      </div>
      <div>
        <div className="ball">
          <div className="eight"></div>
        </div>
      </div>
      <div className="intro-photo-container">
        <img className="intro-photo" src="/sky.jpg"/>
      </div>
      <div className="intro-photo-container">
        <img className="intro-photo" src="/weirdBusinessman.webp"/>
      </div>
    </div>
    </>
    )
}