import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTrash, 
  faCheckDouble, 
  faClipboardList, 
  faRotateLeft 
} from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import { ActionsBox, ActionButton } from './styles/actionsStyles'
import { Section } from './styles/sharedStyles'

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
  }

  const deleteAllCompleted = () => {
    dispatch(todos.actions.deleteAllCompleted())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  return (
    <Section>
      <ActionButton
        disabled={isUndoDisabled}
        onClick={undoDelete}
        type="button"
      >
        <FontAwesomeIcon icon={faRotateLeft} />
      </ActionButton>
      <ActionsBox>
        <ActionButton disabled={allTodos.length ? false : true} onClick={deleteAll}>
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
        <ActionButton disabled={allTodos.length ? false : true} onClick={toggleAll}>
          <FontAwesomeIcon icon={faCheckDouble} />
        </ActionButton>
        <ActionButton disabled={completedTodos.length ? false : true} onClick={deleteAllCompleted}>
          <FontAwesomeIcon icon={faClipboardList} />
        </ActionButton>
      </ActionsBox>
    </Section>
  )
}

export default TodosActions
