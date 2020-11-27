import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'
import { CustomCheckbox } from 'components/CustomCheckbox'
import { TimeIcon } from 'library/Icons'

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
    <ListItem>
      {/* <span>{category}: </span> */}
      <LineWrapper> 
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
        <span>{text}</span>
        <Button 
          type='button' 
          onClick={handleRemoveButtonClick} 
          background='#f9adae'
        >
          Remove
        </Button>
      </LineWrapper>
      {/* Implement functionality so that text turns red if duedate is passed */}
      {/* WHY DOESN'T THE CLOCK-ICON WORK??? */}
      <LineWrapper> 
        <span> <TimeIcon src="../assets/clock.svg" /> {moment(startDate).format('MMM Do YYYY')}</span>
        {dueDate && <span>  {moment(dueDate).format('MMM Do YYYY')}</span>}
      </LineWrapper>
    </ListItem>
  )
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  margin-bottom: 10px;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// const Icon = styled.img`
//   width: 16px;
//   height: 16px;
// `