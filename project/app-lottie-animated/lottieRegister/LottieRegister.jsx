import { useEffect, useRef, memo } from "react";
import Lottie from "react-lottie";
import Data from "./38435-register.json";

const LottieRegister = ({ loop, autoPlay, ...props }) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoPlay || true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
      <Lottie options={defaultOptions} {...props} />
  );
};

export default memo(LottieRegister);
