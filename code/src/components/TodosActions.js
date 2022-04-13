import React from "react"
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

import { ActionsSection, ActionsBox } from './styling/StyledTodosActions'
import { ActionButton } from './styling/IconsButtons'

import todos from 'reducers/todos'

const TodosActions = ({ isUndoDisabled, setIsUndoDisabled }) => {

  const dispatch = useDispatch()

  const undoDelete = () => {
    dispatch(todos.actions.undoDelete())
    setIsUndoDisabled(true)
  }

  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
    setIsUndoDisabled(false)
  }

  const deleteAllCompleted = () => {
    dispatch(todos.actions.deleteAllCompleted())
    setIsUndoDisabled(false)
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  return (
    <ActionsSection>
      <ActionButton type="button" onClick={undoDelete} disabled={isUndoDisabled}><FontAwesomeIcon icon={faRotateLeft} /></ActionButton>
      <ActionsBox>
        <ActionButton onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /></ActionButton>
        <ActionButton onClick={toggleAll}><FontAwesomeIcon icon={faCheckDouble} /></ActionButton>
        <ActionButton onClick={deleteAllCompleted}><FontAwesomeIcon icon={faClipboardList} /></ActionButton>
      </ActionsBox>
    </ActionsSection>
  )
}

export default TodosActions
