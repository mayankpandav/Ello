import React from "react";
import { useMediaQuery, useTheme, Theme } from "@mui/material";

interface ViewportDimensions {
  isMobile: boolean;
  isTablet: boolean;
  width: number;
  height: number;
}

export const useViewport = (): ViewportDimensions => {
  const theme: Theme = useTheme();
  const isTablet: boolean = useMediaQuery(theme.breakpoints.down("md"));

  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  const isMobile: boolean = width < 900;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    isMobile,
    isTablet,
    width,
    height,
  };
};

