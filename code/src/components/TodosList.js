import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import CompletedTodosList from './CompletedTodosList'
import PendingTodosList from './PendingTodosList'

const AllButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;

  &:disabled {
    color: red;
    cursor: default;
  }
`

const TodosList = () => {
  const dispatch = useDispatch()

  const [completedVisible, setCompletedVisible] = useState('block')
  const [pendingVisible, setPendingVisible] = useState('block')
  const [isAllDisabled, setIsAllDisabled] = useState(true)
  const [isCompletedDisabled, setIsCompletedDisabled] = useState(false)
  const [isPendingDisabled, setIsPendingDisabled] = useState(false)

  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  const displayAll = () => {
      setCompletedVisible('block')
      setPendingVisible('block')
      setIsAllDisabled(true)
      setIsCompletedDisabled(false)
      setIsPendingDisabled(false)
  }

  const displayCompleted = () => {
      setPendingVisible('none')
      setCompletedVisible('block')
      setIsCompletedDisabled(true)
      setIsAllDisabled(false)
      setIsPendingDisabled(false)
  }

  const displayPending = () => {
      setCompletedVisible('none')
      setPendingVisible('block')
      setIsPendingDisabled(true)
      setIsAllDisabled(false)
      setIsCompletedDisabled(false)
  }


  return (
    <>
      <AllButton onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /></AllButton>
      <hr></hr>
      <AllButton onClick={toggleAll}><FontAwesomeIcon icon={faCheckDouble} /></AllButton>
      <hr></hr>

      <AllButton onClick={displayAll} disabled={isAllDisabled}>All</AllButton>
      <AllButton onClick={displayCompleted} disabled={isCompletedDisabled}>Completed</AllButton>
      <AllButton onClick={displayPending} disabled={isPendingDisabled}>Not completed</AllButton>

      <div style={{ display: completedVisible }}>
        <CompletedTodosList />
      </div>

      <div style={{ display: pendingVisible }}>
        <PendingTodosList />
      </div>

    </>
  )
}

export default TodosList
