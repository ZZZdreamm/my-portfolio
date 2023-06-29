import "./style.scss"

export default function AboutMeDescription() {
  return (
    <p
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{width:'60%', display:'flex', justifyContent:'flex-end'}} className="very-large-font" id="about-header">About me</div>
      <span className="about-story-text">
        <p>
          I'm <span className="light-dark">Kacper.</span>
        </p>
        <p>
          My adventure with programming started like a year ago. I started
          trying many languages to see which one is most suitable for me. And
          currently I'm mostly focusing on
          <span className="light-dark"> Front-End development.</span>
        </p>
        <p>
          I did some my own projects to upgrade my skills. Now I have started
          doing projects for studies on{" "}
          <span className="light-dark">Warsaw University of Technology.</span>
        </p>
        <p>
          If you have any questions or cooperation offer, just{" "}
          <a
            href="mailto:kmultan1234@gmail.com"
            className="light-dark underline"
          >
            email
          </a>{" "}
          me
        </p>
      </span>
    </p>
  );
}
