import PerspectiveLine from "../PerspesctiveLine";
import "./style.scss";

export default function StairsSocials() {
  const perspectiveLines = [
    { text: "Contact", subtext: "Me", multiplier: 1 },
    {
      text: "Facebook",
      subtext: "KacperMultan",
      href: "https://www.facebook.com/kacper.multan.31/",
      multiplier: 2,
      imageURL: "facebook.png",
    },
    {
      text: "Email",
      subtext: "kmultan1234",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        "kmultan1234@gmail.com"
      )}`,
      multiplier: 3,
      imageURL: "google.png",
    },
    {
      text: "Github",
      subtext: "ZZZdreamm",
      href: "https://github.com/ZZZdreamm?tab=repositories",
      multiplier: 4,
      imageURL: "github.png",
    },
    {
      text: "Linkedin",
      subtext: "Kacper",
      href: "https://www.linkedin.com/in/kacper-multan-320301243/",
      multiplier: 5,
      imageURL: "linkedin.png",
    },
  ];
  return (
    <div className="contact-socials">
      <div id="socials-container" className="socials-container">
        {perspectiveLines.map((line, index) => (
          <>
            {line.multiplier % 2 == 1 ? (
              <PerspectiveLine
                key={line.multiplier}
                text={line.text!}
                subtext={line.subtext!}
                href={line.href}
                multiplier={line.multiplier}
                transformation="perspective-line-vertical"
                imageURL={line.imageURL}
              />
            ) : (
              <PerspectiveLine
                key={line.multiplier}
                text={line.text!}
                subtext={line.subtext!}
                href={line.href}
                multiplier={line.multiplier}
                transformation="perspective-line-horizontal"
                imageURL={line.imageURL}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
