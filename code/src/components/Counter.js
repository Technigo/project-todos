import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti'
import styled from 'styled-components';

const CounterText = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 13px;
  display: flex;
`

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.isChecked);
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
            numberOfPieces={100}
            gravity={0.05}
            confettiSource={{ x: 0, y: 500, w: 1000, h: 1000 }} />
          <h2>All done, good job!</h2>
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