import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { CheckboxStyled } from './CheckboxStyled'

const TaskContainer = styled.div`
  display: flex;
  background-color: #F6D1E5;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  border: solid 1px #D0A7BC;
  &:hover {
    border: solid 1px #f7e1ed;
  }
`

const DeleteButton = styled.button`
  margin-left: auto;
  background-color: #F6D1E7;
  border: none;
  color: #B4889E;
`

const TaskText = styled.div`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  padding-left: 10px;
  overflow: hidden;
  
  text-overflow: ellipsis;
`

export const Task = ({ taskData }) => {
  const dispatch = useDispatch()
  return (
    <TaskContainer>
      <CheckboxStyled checked={taskData.complete} onChange={() => dispatch(tasks.actions.toggleItem(taskData.id))} />
      <TaskText checked={taskData.complete}>{taskData.text}</TaskText>
      <DeleteButton className="deleteItem" onClick={() => dispatch(tasks.actions.deleteItem(taskData.id))}>x</DeleteButton>
    </TaskContainer>
  )
}