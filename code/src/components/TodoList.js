import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'

export const TodoList = () => {
  const todos = useSelector((state) => state.tasks.tasks) //state, tasks(store), tasks(array of tasks)

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}
        />
      ))}
    </List>
  )
}


const List = styled.section`
padding: 20px;
`
