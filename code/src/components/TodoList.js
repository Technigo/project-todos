import React from 'react'
import { useSelector } from 'react-redux'
import { AddTask } from '../components/AddTask'
import { Task } from '../components/Task'
import styled from 'styled-components'

export const TodoList = () => {
  //för att hitta listan storen med todos
  const list = useSelector(store => store.todos.list)

  return (
    <TodoListContainer>
      <AddTask />
      {/* mappar alla tasken som finns i listan */}
      {list.items.map((item, index) => (
        // Index skjuts in till task, det gör att informatinoen är det senaste
        <Task itemIndex={index}></Task>
      ))}
    </TodoListContainer>
  )
}

const TodoListContainer = styled.section`
  height: 100%;
  width: 100%;
`