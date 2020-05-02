import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TrashButton, Checkbox } from '../styles/Button'
import { List, Category, TaskText, Date } from '../styles/Text'

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
      <List background={completed ? 'rgb(235, 254, 255)' : null} color={completed ? 'rgb(157, 215, 208)' : null}>
        <Category title={category} color={completed ? 'rgb(157, 215, 208)' : null}><FontAwesomeIcon icon={icon} /> </Category>
        <TaskText line={completed ? 'line-through' : null}>{task}</TaskText>
        <Checkbox
          type="button"
          onClick={handleCheckboxClick}
          title={completed ? 'Uncomplete task' : 'Complete task'}
        >
          {completed ? <FontAwesomeIcon icon="check-circle" /> : <FontAwesomeIcon icon="circle" />}
        </Checkbox>
        <TrashButton title="Remove task" onClick={handleRemoveButton} color={completed ? 'rgb(157, 215, 208)' : null}><FontAwesomeIcon icon="trash-alt" /></TrashButton>
        <Date><strong>due:</strong> {startDate}</Date>
      </List>
    </>
  )
}
