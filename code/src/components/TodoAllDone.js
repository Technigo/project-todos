import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import todos from 'reducers/todos'
import EmptyState from './EmptyState'

const Container = styled.div`
  background-color: #114e60;
  height: 100%;
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ClearButton = styled.button`
  background-color: #f5cebe;
  padding: 10px 0;
  text-align: center;
  color: #767676;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.2s linear;

  &:hover {
    background-color: #eead92;
    cursor: pointer;
  }
}
`

const TodoAllDone = () => {
  const tasks = useSelector(store => store.todos.tasks)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(todos.actions.toggleCompleteAll())
  } 
  
  return (
    <>
      {tasks.length > 0 ?
        <Container>
          <ClearButton
            onClick={() => handleOnClick()}
          >
            ALL DONE
          </ClearButton>
        </Container>
      :
      <EmptyState />
      }
    </>

  )
}

export default TodoAllDone 