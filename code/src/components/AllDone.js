import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti'
// import styled from 'styled-components';

export const AllDone = () => {
  const items = useSelector((store) => store.tasks.items)
  const { width, height } = useWindowSize()

  const allDone = () => {
    if (items.length === 0) {
      return (
        <>
          <Confetti
            width={width}
            height={height}
            colors={['#000', '#d4af37']}
            numberOfPieces={100}
            confettiSource={{ x: 0, y: 500, w: 1000, h: 1000 }} />
          <h2>All done </h2>
        </>
      )
    }
  }
  return (
    <span>
      {allDone()}
    </span>
  )
}