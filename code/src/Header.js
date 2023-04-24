import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {
  const totalCount = useSelector((store) => store.toDos.items.length)
  const completedCount = useSelector((store) => store.toDos.completedCount)
  const unfinishedToDos = totalCount - completedCount
  return (
    <HeaderSection>
      <H1>What to do?</H1>
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
padding: 0px 20px;
gap: 10px;
`

const H1 = styled.h1`
margin: unset;
font-size: 20px;
color: #FF847C;
`

const ToDoCounter = styled.div`
display: flex;
flex-direction:  column;
align-self: flex-start;
justify-self: flex-end;
font-weight: bold;
color: #f0ece2;

`