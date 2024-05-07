"use client";
import { useState, useEffect } from "react";

function useWindowSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size when component mounts
    const checkScreenSize = () => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      setIsSmallScreen(mediaQuery.matches);
    };

    // Add event listener to re-check screen size when it changes
    window.addEventListener("resize", checkScreenSize);

    // Check screen size initially
    checkScreenSize();

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // Empty dependency array ensures this effect runs only once

  return isSmallScreen;
}

export default useWindowSize;
