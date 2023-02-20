import { useState, useEffect } from "react";
import theme from "../styles/theme/DefaultTheme.style";

export const useDetectMobileScreen = (): boolean => {
  const {
    media: {
      mobile: { maxWidth },
    },
  } = theme;

  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      parseInt(maxWidth) >= window.innerWidth
        ? setIsMobile(true)
        : setIsMobile(false);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMobile;
};
