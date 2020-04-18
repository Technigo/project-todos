import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.header`
  border-bottom: 5px solid white;
`
const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-shadow: lightgray;
`


export const Header = () => {
  const totalNumber = useSelector((state)=>state.todoStore.todos.length)
  const filterNumber = useSelector((state)=>state.todoStore.todos.filter((item)=>(!item.taskDone)).length)
  return(
    <Wrapper>
      <Title>Your Todos</Title>
      <p>Total todos: {totalNumber}</p>
      <p>Unfinished todos: {filterNumber}</p>
    </Wrapper>
  )
}