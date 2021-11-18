import React from 'react';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';

const Party = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default Party;
