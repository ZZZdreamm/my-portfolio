import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import GoBack from "./GoBack";
import PerspectiveLine, { PerspectiveLineProps } from "./PerspectiveLine";

export default function Contact() {

    const [message, setMessage] = useState('')
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e:any) => {
    e.preventDefault();
    if(validateForm()){
      //@ts-ignore
      emailjs.sendForm('service_7rv6lus', 'template_qbxmgfj', form.current, 'HyBgoYbq4MyHVTa3_')
      .then((result) => {
        setMessage('Message has been sent!')
      }, (error:any) => {
        setMessage('There has been error... :(')
      });
    }else{
      setMessage('You have to fill all inputs!')
    }
  };
  function validateForm() {
    var doc = document.forms
    console.log(doc)
    //@ts-ignore
    var a = document.forms['email-form']['user_name'].value;
    //@ts-ignore
    var b = document.forms['email-form']['user_email'].value;
    //@ts-ignore
    var c = document.forms['email-form']['user_message'].value;
    if ((a == null || a == "") || (b == null || b === "") || (c == null || c == "")) {
      return false;
    }
    return true
  }


  const perspectiveLines = [{text:"Contact", subtext:"Me", multiplier:1},
  {text:"Facebook", subtext:"KacperMultan", href:"https://www.facebook.com/kacper.multan.31/",multiplier:2, imageURL:'facebook.png'},
   {text:"Email", subtext:"kmultan1234", href:"https://www.google.com/intl/pl/gmail/about/",multiplier:3, imageURL:'google.png'},
    {text:"Github", subtext:"ZZZdreamm", href:"https://github.com/ZZZdreamm?tab=repositories", multiplier:4, imageURL:'github.png'},
     {text:"Linkedin", subtext:"KacperStudent", href:"https://www.linkedin.com/in/kacper-multan-320301243/", multiplier:5, imageURL:'linkedin.png'}]
  return (
    <div id="contact">
        <div className="contact-socials">
            <div className="socials-container">
                    {perspectiveLines.map((line)=>(
                      <>
                        {line.multiplier % 2 == 1 ?   <PerspectiveLine text={line.text!} subtext={line.subtext!} href={line.href} multiplier={line.multiplier} transformation="perspective-line-vertical" imageURL={line.imageURL}/>
                        :  <PerspectiveLine text={line.text!} subtext={line.subtext!} href={line.href}  multiplier={line.multiplier} transformation="perspective-line-horizontal" imageURL={line.imageURL}/>
                        }
                      </>

                    ))}
            </div>
        </div>
      <div className="send-email">
        <h1 style={{ fontSize: "60px" }}>Send me email</h1>
        <form ref={form} name="email-form" onSubmit={sendEmail}>
          <h3 style={{ fontSize: "45px" }}>Your name</h3>
          <input className="email-input" type="text" name="user_name" placeholder="Enter name"/>
          <h3 style={{ fontSize: "45px" }}>Your email</h3>
          <input className="email-input" type="email" name="user_email" placeholder="Enter email"/>
          <h3 style={{ fontSize: "45px" }}>Your message</h3>
          <input className="email-input"
            name="user_message"
            style={{resize: "vertical" }}
            placeholder="Enter message"
          />
          <div>
          <button
            className="submit-button"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Send
          </button>
          <span id="send-email-result" style={{marginLeft:'2em'}}>{message}</span>
          </div>
        </form>

      </div>
      <GoBack />
    </div>
  );
}
