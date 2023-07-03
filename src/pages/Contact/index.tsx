import SendEmail from "../../components/SendEmail";
import StairsSocials from "../../components/StairsSocials";
import "./style.scss";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <section className="contact-section fullSize flex-center">
          <StairsSocials />
          <SendEmail />
        </section>
        <button
          // id="resume-link"
          className="button"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1gcQ-NmrmqNT01nSIOfE8LAW7bV9S5svi/view?usp=sharing"
            );
          }}
        >
          My Resume (pdf)
        </button>
      </div>
    </>
  );
}
