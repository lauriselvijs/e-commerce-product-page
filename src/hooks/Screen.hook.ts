import React, { useState, useEffect } from "react";
import { RootState } from "../store/app/store";
import { ThemeName } from "../store/features/Theme/Theme.slice";
import { useAppSelector } from "./Store.hook";

export const useDetectMobileScreen = (): boolean => {
  const theme = useAppSelector((state: RootState) => state[ThemeName]);
  const {
    media: {
      mobile: { maxWidth },
    },
  } = theme;
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);

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
