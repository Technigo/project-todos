import React from "react";
import Lottie from "react-lottie";

export const LottieAnimation = ({ lotti, width, height }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};