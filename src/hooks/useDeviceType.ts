import React ,{useEffect,useState} from 'react'
import useWindowDimensions from './useWindowDimensions';

export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState("web");
    const { wHeight, wWidth }: any = useWindowDimensions();
  
    useEffect(() => {
        if (wWidth > 780 && wWidth < 1200) {
          setDeviceType("tab");
        } else if (wWidth < 780) {
          setDeviceType("mobile");
        } else {
          setDeviceType("web");
        }
      }, [wWidth]);

      return {deviceType}

}
