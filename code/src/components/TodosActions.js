import React from "react"
import { useDispatch, useSelector } from 'react-redux'
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
  
  const allTodos = useSelector((store) => store.todos.items)
  const completedTodos = allTodos.filter(todo => todo.completed)

  const undoDelete = () => {
    dispatch(todos.actions.undoDelete())
    setIsUndoDisabled(true)
  }

  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
    setIsUndoDisabled(false)
    // setTimeout(() => {
    //   console.log('test')
    //   dispatch(todos.actions.disableUndoDelete())
    //   setIsUndoDisabled(true)
    // }, 5000)
  }

  const deleteAllCompleted = () => {
    dispatch(todos.actions.deleteAllCompleted())
    // setTimeout(() => {
    //   console.log('test')
    //   dispatch(todos.actions.disableUndoDelete())
    //   setIsUndoDisabled(true)
    // }, 5000)
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  return (
    <ActionsSection>
      <ActionButton type="button" onClick={undoDelete} disabled={isUndoDisabled}><FontAwesomeIcon icon={faRotateLeft} /></ActionButton>
      <ActionsBox>
        <ActionButton onClick={deleteAll} disabled={allTodos.length ? false : true}><FontAwesomeIcon icon={faTrash} /></ActionButton>
        <ActionButton onClick={toggleAll} disabled={allTodos.length ? false : true}><FontAwesomeIcon icon={faCheckDouble} /></ActionButton>
        <ActionButton onClick={deleteAllCompleted} disabled={completedTodos.length ? false : true}><FontAwesomeIcon icon={faClipboardList} /></ActionButton>
      </ActionsBox>
    </ActionsSection>
  )
}

export default TodosActions
