import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import { ObserverIsVisible } from "./ObserverIsVisible";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender";
export default function AboutMe() {

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e:any) => {
    e.preventDefault();

    //@ts-ignore
    emailjs.sendForm('service_7rv6lus', 'template_qbxmgfj', form.current, 'HyBgoYbq4MyHVTa3_')
      .then((result) => {
          console.log(result.text);
      }, (error:any) => {
          console.log(error.text);
      });
  };


  useEffectAfterSecondRender(()=>{
    const blurImg = document.getElementById('about-me-img')
    if(blurImg){
      window!.addEventListener("load", ()=>{
        const options = {
          rootMargin: '0px',
          threshold: 1.0
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0){
              blurImg!.classList.remove('blur');
                console.log('sdsds')
            }else{
              blurImg!.classList.add('blur');
            }
          });
        }, options);
      observer.observe(blurImg);
      },false);
    }
  },[])


  return (
    <>
    <span id="refAboutMe"></span>
    <div id="about" className="about-me">
      <div className="about-me-text">
        <h1>About me</h1>
        <span>
          I'm Kacper. My adventure with programming started like a year ago. I
          started trying many languages to see which one is most suitable for
          me. I did some my own projects to upgrade my skills. Then started
          doing projects for studies on Warsaw University of Technology. Now I'm
          on second semester of first year of studies and I'm looking for job to
          increase my skills and get some experience with real, useful projects.
          If you are looking for Java Script, C# or Python junior developer
          email me below.
        </span>
        <h1>Send me email</h1>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Your name</h3>
          <input type="text" name="user_name"/>
          <h3>Your email</h3>
          <input type="email" name="user_email" style={{ width: "40%" }} />
          <h3>Your message</h3>
          <textarea name="message" style={{ width: "90%", resize:'vertical'}} />
          <button
            className="submit-button"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Send message
          </button>
        </form>
      </div>
      <img id='about-me-img' className="about-me-img" src="/verticalPhoto.jpg" />
    </div>
    </>
  );
}
