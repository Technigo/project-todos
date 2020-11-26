import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'

const TaskContainer = styled.div`
  display: flex;
  background-color: #F6D1E5;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`
const DeleteButton = styled.button`
  margin-left: auto;
  background-color: #F6D1E7;
  border: none;
  color: #B4889E;
`

export const Task = ({ taskData }) => {
  const dispatch = useDispatch()
  return (
    <TaskContainer>
      
      {/* Change this to a styled version */}
      {/* <CheckboxStyled />  */}
      <input type='checkbox' checked={taskData.complete} onChange={() => dispatch(tasks.actions.toggleItem(taskData.id))} />

      {taskData.text}

      <DeleteButton className="deleteItem" onClick={() => dispatch(tasks.actions.deleteItem(taskData.id))}>
        x
    </DeleteButton>

    </TaskContainer>
  )
}