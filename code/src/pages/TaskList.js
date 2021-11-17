import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components/macro'

import ToDos from '../components/ToDos'
import AddTask from '../components/AddTask'
import todos from 'reducers/todos'

const StyledMain = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
`


const TaskList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const AllToDos = useSelector(
    (state) => state.todos.items.length
  )
  const completedToDos = useSelector(
    (state) => state.todos.items.filter((item) => item.isComplete)
  )

  const noTasks = useSelector(
    (state) => state.todos.items.length === 0
  )

  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll())
    navigate('/')
    console.log(noTasks)
  }

  return (
    <StyledMain>
      <ToDos />
      <span>Completed ToDos: {completedToDos.length}/{AllToDos} </span> 
      <button
        type='button'
        disabled={noTasks}
        onClick={onCompleteAll}
      >Complete all</button> 
      <AddTask />
    </StyledMain>
  )
}

export default TaskList
