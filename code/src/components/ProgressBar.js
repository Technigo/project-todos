import React from 'react'
import { useSelector } from 'react-redux'
import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'
import styled from 'styled-components'

const ProgressBar = () => {
  const allTasksToDo = useSelector((store) => store.tasks.items);
  const numberOfTasksDone = allTasksToDo.filter((item) => item.isDone).length;
  const [width, height] = useWindowSize()

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
          <Span><p>Woop! All finished!</p></Span>
        </>
      )
    } else {
      return (
        <ProgressBarStyled>
          <Status><span>{numberOfTasksDone}/{allTasksToDo.length}</span></Status>
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
`
const Status = styled.p`
   
    `

const CounterText = styled.p`
    `

const Span = styled.section`
font-weight: bold;
margin-right: auto;
padding-right: 60px;
`
/* Fix this centering later */