import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti'
import styled from 'styled-components/macro';

const CounterText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
`

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.complete);
  const { width, height } = useWindowSize()

  const doneTasks = () => {
    if (items.length === 0) {
      return ''
    } else if (items.length === completedTasks.length) {
      return (
        <>
          <Confetti
            width={width}
            height={height}
            colors={['#FE6D60', '#FFC967']}
            numberOfPieces={200}
            gravity={0.05}
            confettiSource={{ w: 1000, h: 1000 }} />
          <p>All done</p>
        </>)
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}