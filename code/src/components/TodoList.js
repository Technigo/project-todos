import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'

export const TodoList = () => {
  const todos = useSelector((state) => state.tasks.tasks) //state, tasks(store), tasks(array of tasks)

  return (
    <Wrapper>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 
`;
