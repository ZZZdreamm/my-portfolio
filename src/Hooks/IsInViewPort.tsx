import { useMemo, useState, useEffect } from "react";

// @ts-ignore
function useIsInViewport(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState<boolean>();
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);

        },
        {
          rootMargin,
        }
      ),
    []
  );

  useEffect(() => {
    if (ref.current != null) {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current, observer]);

  return isIntersecting;
}

export default useIsInViewport;
