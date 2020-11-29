import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'
import { CheckBox } from './CheckBox'
import trashCan from '../assets/trashcan.png'


export const Task = ({ item }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.setChecked(item.id))
  };


  return (
    <TaskContainer>
      <CheckBox
        isChecked={item.complete}
        onChangeHandler={handleCheckboxClick}
      />
      <TaskText line={item.complete ? 'line-through' : null}>{item.text}</TaskText>
      <DeleteImg
        src={trashCan} alt="trashcan"
        onClick={() => handleDelete(item.id)}>
      </DeleteImg>
    </TaskContainer>
  )
}

const DeleteImg = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 15px;
`
const TaskContainer = styled.section`
  display: flex;  
  justify-content: center;
  align-items: center; 
  margin-left: 30px;
  margin-top: 30px;
 `

const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
  margin-right: 20px;
  font-family: 'Roboto Mono', monospace;
`

