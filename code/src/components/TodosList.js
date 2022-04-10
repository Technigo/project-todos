import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

import { todos } from 'reducers/todos'

import { CompletedTodosList } from './CompletedTodosList'
import { NotCompletedTodosList } from './NotCompletedTodosList'

const AllButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:disabled {
    color: red;
  }
`

export const TodosList = () => {
  const dispatch = useDispatch()

  const [completedVisible, setCompletedVisible] = useState('block')
  const [notCompletedVisible, setNotCompletedVisible] = useState('block')
  const [isAllDisabled, setIsAllDisabled] = useState(true)
  const [isCompletedDisabled, setIsCompletedDisabled] = useState(false)
  const [isNotCompletedDisabled, setIsNotCompletedDisabled] = useState(false)


  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  const onDisplayAll = () => {
      setCompletedVisible('block')
      setNotCompletedVisible('block')
      setIsAllDisabled(true)
      setIsCompletedDisabled(false)
      setIsNotCompletedDisabled(false)
  }

  const onDisplayCompleted = () => {
      setNotCompletedVisible('none')
      setCompletedVisible('block')
      setIsCompletedDisabled(true)
      setIsAllDisabled(false)
      setIsNotCompletedDisabled(false)
  }

  const onDisplayNotCompleted = () => {
      setCompletedVisible('none')
      setNotCompletedVisible('block')
      setIsNotCompletedDisabled(true)
      setIsAllDisabled(false)
      setIsCompletedDisabled(false)
  }


  return (
    <>
      <AllButton onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /></AllButton>
      <hr></hr>
      <AllButton onClick={toggleAll}><FontAwesomeIcon icon={faCheckDouble} /></AllButton>
      <hr></hr>

      <button onClick={onDisplayAll} disabled={isAllDisabled}>All</button>
      <button onClick={onDisplayCompleted} disabled={isCompletedDisabled}>Completed</button>
      <button onClick={onDisplayNotCompleted} disabled={isNotCompletedDisabled}>Not completed</button>

      <div style={{ display: completedVisible }}>
        <CompletedTodosList />
      </div>

      <div style={{ display: notCompletedVisible }}>
        <NotCompletedTodosList />
      </div>

    </>
  )
}
