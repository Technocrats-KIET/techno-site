import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT_PX = 700;

export const useMobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  useEffect(() => {
    const matchesMobile = () => window.innerWidth <= MOBILE_BREAKPOINT_PX;

    if (matchesMobile()) {
      setMobile(true);
    } else {
      setMobile(false);
      setOpen(false);
    }

    const handleResize = () => {
      setMobile(matchesMobile());
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isOpen, isMobile, toggle, close };
};
