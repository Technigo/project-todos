import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'
import { CustomCheckbox } from 'components/CustomCheckbox'

export const Todo = (props) => {
  const { id, text, dueDate, category, complete, startDate } = props.item;
  const dispatch = useDispatch()

  //checkbox click dispatches a toggle completed action to Redux:
  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeTodo(id))
  }

  return (
    <li>
      {/* <span>{category}: </span> */}
      <span>{text}</span>
      <label>
        <CustomCheckbox 
          isChecked={complete} 
          onChangeHandler={handleCheckboxClick}/>
        {/* <input
        type='checkbox'
        // || false fixes the issues of going from controlled to uncontrolled value
          // here https://github.com/facebook/react/issues/6779
        checked={props.item.complete || false}
        onChange={handleCheckboxClick}
        /> */}
      </label>
      <Button 
        type='button' 
        onClick={handleRemoveButtonClick} 
        background='#f9adae'
      >
        Remove
      </Button>
      <span>ADDED: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
    </li>
  )
}
