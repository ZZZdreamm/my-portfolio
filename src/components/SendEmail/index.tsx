import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";

export default function SendEmail() {
  const [message, setMessage] = useState("");
  const [messageEffect, setMessageEffect] = useState<boolean | undefined>();
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      //@ts-ignore
      emailjs
        .sendForm(
          "service_7rv6lus",
          "template_qbxmgfj",
          form.current!,
          "HyBgoYbq4MyHVTa3_"
        )
        .then(
          (result) => {
            setTimeout(() => {
              setMessage("Message has been sent!");
            }, 2000);
            setMessageEffect(true);
          },
          (error: any) => {
            setTimeout(() => {
              setMessage("There has been error... :(");
            }, 2000);
            setMessageEffect(false);
          }
        );
    } else {
      setTimeout(() => {
        setMessage("You have to fill all inputs!");
      }, 2000);
    }
  };
  function validateForm() {
    //@ts-ignore
    var a = document.forms["email-form"]["user_name"].value;
    //@ts-ignore
    var b = document.forms["email-form"]["user_email"].value;
    //@ts-ignore
    var c = document.forms["email-form"]["user_message"].value;
    if (a == null || a == "" || b == null || b === "" || c == null || c == "") {
      setMessageEffect(false);
      return false;
    }
    setMessageEffect(true);
    return true;
  }

  var buttonSub = document.getElementById("email-form-button");

  useEffect(() => {
    if (!buttonSub) return;
    function buttonCLickEventHandler(e: any) {
      setMessage("")
      animateButton(e);
      sendEmail(e);
    }
    var animateButton = function (e: any) {
      e.preventDefault();
      //reset animation
      e.target.classList.remove("animate");

      e.target.classList.add("animate");

      e.target.classList.add("animate");
      setTimeout(function () {
        e.target.classList.remove("animate");
      }, 6000);
    };

    buttonSub!.addEventListener("click", buttonCLickEventHandler, false);
  }, [buttonSub]);

  const buttonClass = messageEffect == true ? "success" : "error";
  const messageColor = messageEffect == true ? "green-text" : "red-text";
  return (
    <div className="send-email">
      <form
        className="email-form"
        ref={form}
        name="email-form"
        onSubmit={sendEmail}
        autoComplete="off"
        onFocus={() => setMessage("")}
      >
        <h1 style={{ fontSize: "3.5rem" }}>Send me email</h1>

        <h3>Your name</h3>
        <input
          className="email-input"
          type="text"
          name="user_name"
          placeholder="Enter name"
        />
        <h3>Your email</h3>
        <input
          className="email-input"
          type="email"
          name="user_email"
          placeholder="Enter email"
        />
        <h3>Your message</h3>
        <input
          className="email-input"
          name="user_message"
          placeholder="Enter message"
        />
        <div className="submit-div">
          <button
            id="email-form-button"
            className={`email-button ${buttonClass}`}
            type="submit"
          >
            Send
          </button>
          <span id="send-email-result" className={messageColor}>
            {message}
          </span>
          <div className="loader">
            <div className="check">
              <span className="check-one"></span>
              <span className="check-two"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
