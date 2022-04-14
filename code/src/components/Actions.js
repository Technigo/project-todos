import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTrash, 
  faCheckDouble, 
  faRotateLeft 
} from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import { ActionsBox, ActionButton, UndoButton } from './styles/actionsStyles'
import { Section } from './styles/sharedStyles'

const Actions = ({ isUndoDisabled, setIsUndoDisabled }) => {

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
  }

  const deleteAllCompleted = () => {
    dispatch(todos.actions.deleteAllCompleted())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  return (
    <Section>
      <UndoButton
        disabled={isUndoDisabled}
        onClick={undoDelete}
        type="button"
      >
        <FontAwesomeIcon icon={faRotateLeft} />
      </UndoButton>
      <ActionsBox>
        <ActionButton disabled={allTodos.length ? false : true} onClick={deleteAll}>
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
        <ActionButton disabled={allTodos.length ? false : true} onClick={toggleAll}>
          <FontAwesomeIcon icon={faCheckDouble} />
        </ActionButton>
        <ActionButton disabled={completedTodos.length ? false : true} onClick={deleteAllCompleted}>
        <FontAwesomeIcon icon={faCheckDouble} mask={faTrash} transform="shrink-8" />
        </ActionButton>
      </ActionsBox>
    </Section>
  )
}

export default Actions
