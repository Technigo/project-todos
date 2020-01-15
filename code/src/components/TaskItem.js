import React from 'react'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
// import { tasks } from 'reducers/tasks'


//Toggle task when button onClick (completed: true/false)
// Add a trash-icon with remove--task-function

export const TaskItem = (props) => {

  // const dispatch = useDispatch()
  // const handleToggleTask = () => { dispatch(tasks.actions.toggleCompleted(props.task.id))}
  // const handleRemoveTask = () => { dispatch(tasks.actions.xxx(props.task.id))}

  return (
    <TaskWrapper>
      <Task>
        <TaskButton />
        <TaskText>{props.task.text}</TaskText>
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
  font-size: 16px;
  color: #333;
`