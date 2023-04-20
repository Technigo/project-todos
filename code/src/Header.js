import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import arrow from './images/arrow.png'

export const Header = () => {
  const totalCount = useSelector((store) => store.toDos.items.length)
  const completedCount = useSelector((store) => store.toDos.completedCount)
  const unfinishedToDos = totalCount - completedCount
  return (
    <HeaderSection>
      <H1>What to do?</H1>
      {/* <Arrow src={arrow} alt="arrow" /> */}
      <ToDoCounter>
        <p> To do: {unfinishedToDos}</p>
        <p>Done: {completedCount} / {totalCount}</p>
      </ToDoCounter>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
display: flex;
flex-direction: column;
align-self: stretch;
align-items: center;
justify-content: center;
background-color: black;
color: white;
font-family: 'Courier New';
padding: 20px;
gap: 16px;
`

const H1 = styled.h1`
margin: unset;
font-size: 20px;
`

const ToDoCounter = styled.div`
display: flex;
flex-direction:  column;
align-self: flex-start;
justify-self: flex-end;
font-weight: bold;

`

// const Arrow = styled.img`
// transform: rotate(30deg);
// position: absolute;
// right: 5%;
// top: 10%;
// `
