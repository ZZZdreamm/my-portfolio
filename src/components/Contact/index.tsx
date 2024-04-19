import SendEmail from "./SendEmail";
import StairsSocials from "./StairsSocials";
import "./style.scss";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <section className="contact-section fullSize flex-center">
          <StairsSocials />
          <SendEmail />
        </section>
        {/* <button
          id="resume-link"
          className="button"
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1USZu2EszUWhUSSAjQlNCptcVWgiEXX66CWFiL65WXFA/edit?usp=sharing",
              "_blank"
            );
          }}
        >
          My Resume (pdf)
        </button> */}
      </div>
    </>
  );
}
