import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export default function useWindowDimensions() {
  const getWindowDimensions = () => {
    const { width, height } = Dimensions.get("window");
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    const subscription = Dimensions.addEventListener("change", handleResize);

    return () => {
      subscription?.remove();  // Remove the event listener when the component unmounts
    };
  }, []);

  const dimension = { wHeight: windowDimensions.height, wWidth: windowDimensions.width };
  return dimension;
}
