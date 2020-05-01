import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TrashButton } from '../styles/Button'
import { List, Category } from '../styles/Text'

export const Task = (props) => {
  const { id, task, category, completed, dueDate, startDate, icon } = props.item

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todo.actions.toggleCheckbox(id))
  }

  const handleRemoveButton = () => {
    dispatch(todo.actions.removeItem(id))
  }


  return (
    <>
      <List>
        <Category title={category}><FontAwesomeIcon icon={icon} /> </Category>
        <span>{task}</span>
        <span>{startDate}</span>
        {/* <span>{dueDate}</span> */}
        <input
          type="checkbox"
          isChecked={completed}
          onChangeHandler={handleCheckboxClick}
        />
        <TrashButton title="Remove task" onClick={handleRemoveButton}><FontAwesomeIcon icon="trash-alt" /></TrashButton>
      </List>
    </>
  )
}
