import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import todos from '../reducers/todos'

const CompletedToDos = () => {
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
  }

  return (
    <>
    {!noTasks &&
    <div>
      <span>Completed ToDos: {completedToDos.length}/{AllToDos} </span> 
      <button
        type='button'
        onClick={onCompleteAll}
      >Clear all</button> 
    </div>}
    </>
  )
}

export default CompletedToDos
