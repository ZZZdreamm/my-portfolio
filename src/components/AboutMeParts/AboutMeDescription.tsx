import "./style.scss";

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
      <div
        style={{display: "flex", justifyContent: "flex-end" }}
        className="very-large-font"
        id="about-header"
      >
        About me
      </div>
      <span className="about-story-text">
        <p>
          I'm <span className="light-dark">Kacper.</span>
        </p>
        <p>
          My adventure with programming started year ago. I have tried many
          languages to find out which one will suit me the best. And this way I
          have ended up in{" "}
          <span className="light-dark">Front-End development.</span>
        </p>
        <p>
          I did some projects to upgrade my skills. During my front-end journey
          I have created some other projects for{" "}
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
