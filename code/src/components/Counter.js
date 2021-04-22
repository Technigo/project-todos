import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Counter = () => {
  const allToDos = useSelector((store) => store.todos.items)

  // filter completed/unCompleted
  const uncompletedTodos = allToDos.filter((todo) => !todo.isComplete)
  const completedTodos = allToDos.filter((todo) => todo.isComplete)

  // ta bort completed senare när countern räknanar rätt! :) 
  return (
    <Container>
        Completed: {uncompletedTodos.length} / {allToDos.length}
    </Container>
  )
}

const Container = styled.div`
  font-size: 14px;
  color: slategrey; 
`;

export default Counter
