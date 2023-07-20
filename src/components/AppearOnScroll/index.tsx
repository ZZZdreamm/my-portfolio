import { useEffect } from "react";

const AppearOnScroll = () => {
  useEffect(() => {
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };
    const appearObserver = new IntersectionObserver(
      (entries, appearObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            appearObserver.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );
    const elements = document.querySelectorAll(".fadeIn");
    elements.forEach((element) => {
      appearObserver.observe(element);
    });
  }, []);

  return <></>;
};

export default AppearOnScroll;
