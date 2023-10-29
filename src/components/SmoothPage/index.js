import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import "./styles.scss";

const SmoothPage = ({ children }) => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    // if (window.innerWidth < 1200) return;
    if (!scrollContainerRef.current) return;

    var html = document.documentElement;
    var body = document.body;

    var scroller = {
      target: scrollContainerRef.current,
      ease: 0.05,
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    var requestId = null;
    var resizeNow = false;

    gsap.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      window.addEventListener("scroll", onScroll);
    }

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;
      if (resized) {
        scroller.resizeRequest = 0;
        resizeNow = true;
      }
      if (resizeNow) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        resizeNow = false;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
        if (body.style.overflowY !== "hidden") {
          var height = scroller.target.clientHeight;
          body.style.height = height + "px";
        }
      }

      gsap.set(scroller.target, {
        y: -scroller.y,
      });

      requestId = requestAnimationFrame(updateScroller);
      // let p = scroller.scrollRequest > 0
      //   ? requestAnimationFrame(updateScroller)
      //   : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    setTimeout(() => {
      onLoad();
      setTimeout(() => {
        updateScroller();
      }, 1000);
    }, 100);
  }, [scrollContainerRef.current]);

  console.log(
    "scrollContainerRef: ",
    scrollContainerRef?.current?.clientHeight
  );
  return (
    <>
      {/* {window.innerWidth >= 1200 ? ( */}
      <div className="viewport">
        <div
          ref={scrollContainerRef}
          id="scroll-container"
          className="scroll-container"
        >
          {children}
        </div>
      </div>
      {/* ) : (
        <>{children}</>
      )} */}
    </>
  );
};

export default SmoothPage;
