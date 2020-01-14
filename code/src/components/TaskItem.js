import React from 'react'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
// import { tasks } from 'reducers/tasks'


//Toggle task when onClick (completed: true/false)

export const TaskItem = ({ task }) => {

  // const dispatch = useDispatch()

  return (
    <TaskWrapper>
      <Task>
        <TaskButton />
        <TaskText>{task}</TaskText>
      </Task>
    </TaskWrapper>
  )
}

const TaskWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const Task = styled.section`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 1px solid #EBEEEF;
`
const TaskButton = styled.button`
  background: transparent;
  border: 1px solid #264653;
  color: #264653;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`
const TaskText = styled.article`
  color: #333;
`