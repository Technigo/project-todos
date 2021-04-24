import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import TotalTodos from './TotalTodos'

const HeaderSection = styled.section `
  border-bottom: 2px solid gray; 
  margin-bottom: 20px; 
  color: black;
  text-align: center; 
  height: 100px;
  width: 100%;
  font-size: 20px; 
`
const Title = styled.h1`
  font-size: 25px; 
`

const Header = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const completedTodos = tasks.filter(todo => todo.isComplete)
  
  return (
    <HeaderSection>
      <Title>What ToDo?</Title>
      <TotalTodos 
        tasks={tasks}
        completedTodos={completedTodos}
      />
    </HeaderSection>
    )
}

export default Header 