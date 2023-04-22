import React from 'react'
import { useSelector } from 'react-redux'
import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'
import styled from 'styled-components'

const ProgressBar = () => {
  const allTasksToDo = useSelector((store) => store.tasks.items);
  const numberOfTasksDone = allTasksToDo.filter((item) => item.isDone).length;
  const [width, height] = useWindowSize()

  // const [width, height] = useWindowSize()
  // this returns width and height defined, but still doesn't work

  const doneTasks = () => {
    if (allTasksToDo.length === 0) {
      return ''
    } else if (allTasksToDo.length === numberOfTasksDone) {
      console.log(width, 'width')
      console.log(height, 'height')
      return (
        <>
          <Confetti
            width={width}
            height={height}
            colors={['#C92C6D', '#91D8E4']}
            numberOfPieces={200}
            gravity={0.05}
            confettiSource={{ x: 0, y: 500, w: 1000, h: 1000 }} />
          <p>Woop! All finished!</p>
        </>
      )
    } else {
      return (
        <ProgressBarStyled>
          <Status>{numberOfTasksDone}/{allTasksToDo.length} done</Status>
        </ProgressBarStyled>)
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}

export default ProgressBar;

/* STYLING FOR PROGRESSBAR */

const ProgressBarStyled = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  text-align: center; */
  
`
const Status = styled.p`
    /* text-align: center;
    justify-content: center;
    align-self: center;
    text-align: center; */
    `

const CounterText = styled.p`
    `