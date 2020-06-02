import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


export const Header = () => {
  const todos = useSelector((store) => store.todos.list)
  const completedTasks = todos.items.filter((item) => item.complete)
    return (
      <HeaderContainer>
        <Headline>Your todo app</Headline>
        <p>You have completed  {completedTasks.length} / {todos.items.length} things to do!</p>
      </HeaderContainer>
    )
  }

  const HeaderContainer = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px 0 0;
  background-color: #ffff80;
  justify-content: space-between;
` 

const Headline = styled.h1`
  color: white;
  font-size: 2.5em;
  text-transform: lowercase;
  -webkit-text-stroke: 1px black;
`