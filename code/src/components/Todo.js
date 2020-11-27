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
      <TextLineWrapper> 
        <label>
          <CustomCheckbox
          //What is this isChecked and why is it here? My state is 'complete' and it doesn't change???
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
        <TextLine checked={complete ? true : ''}>{text}</TextLine>
        <Button 
          type='button' 
          onClick={handleRemoveButtonClick} 
          background='#d3947a'
        >
          Remove
        </Button>
      </TextLineWrapper>
      {/* Implement functionality so that text turns red if duedate is passed? */}
      <TimeLineWrapper> 
        <span> <TimeIcon src="../assets/clock.svg" /> {moment(startDate).format('MMM Do YYYY')}</span>
        {dueDate && <span> <TimeIcon src="../assets/hourglass.svg" /> {moment(dueDate).format('MMM Do YYYY')}</span>}
      </TimeLineWrapper>
    </ListItem>
  )
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

const TextLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// If I want text to be striked-through here?
// { textDecoration: complete ? 'line-through' : '' }
// ${({ checked }) => checked && `
//     opacity: 0.3;
//     `
//text-decoration: ${(props) => (props.checked ? 'line-through' : '')};
// ${({ complete }) => complete && `
//     opacity: 0.3;
//   `
//   }  
const TextLine = styled.p`
  word-wrap: wrap;
  height: auto;
  ${({ checked }) => checked && `
    text-decoration: line-through;  
    opacity: 0.3;
    `
  }  
`;

const TimeLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

// const TimeLine = styled.span`
  
// `



// const Icon = styled.img`
//   width: 16px;
//   height: 16px;
// `