import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks' 

import moment from 'moment'
import styled from 'styled-components'

import Logo from './assets/delete.svg'
import { CustomCheckbox } from './CustomCheckbox'

export const Task = ({task}) => {

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleTaskCompleted(task.id))
  }

  const handleRemoveButton = () => {
    dispatch(tasks.actions.removeItem(task.id))
  }

  return (
    <TaskContainer checked={task.complete}>
      <CustomCheckbox 
        isChecked={task.complete} 
        onChangeHandler={handleCheckboxClick}
      />
      <TextContainer>
        <TaskName>
          {task.text}
        </TaskName>
        <Date>
        created at {moment(task.id).format('LT')}
      </Date>
      </TextContainer>
        <RemoveButton onClick={handleRemoveButton}>
          <RemoveIcon
            src={Logo}
            alt='delete task'
          />
        </RemoveButton>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 10px 0;
  transition: 0.3s ease;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  opacity: ${props => props.checked ? '0.4' : '1'};

  @media (max-width: 280px) {
    padding: 8px;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

const TaskName = styled.label`
  word-break: break-word;
  font-size: 16px;

  @media (max-width: 280px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Date = styled.p`
  display: inline-block;
  text-transform: uppercase;
  color: #514d4d;
  font-size: 8px;
  margin: 5px 0 0 0;
`
const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 5px 0 15px;
  cursor: pointer;
`
const RemoveIcon = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.4);
  }
`