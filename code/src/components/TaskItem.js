import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  font-family: 'Shadows Into Light', cursive;
`

const StyledSingleTask = styled.p`
  cursor: pointer;
  font-family: 'Shadows Into Light', cursive;
  background: transparent;
  border: none;
  overflow-wrap: anywhere;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  margin:0;
  `

const RemoveButton = styled.button`
  cursor: pointer;
  font-family: 'Shadows Into Light', cursive;
  background: transparent;
  border: none;
  font-size: 120%;
  text-decoration: none;
  padding:0;
  font-weight: bold
`

const TaskText = styled.p`
  margin-bottom: 1px;
`

const DateString = styled.div`
  font-size: 80%;
`

const TaskItem = ({ task, index, onDelete, onDone }) => {
  return (
    <TaskWrapper>
      <StyledSingleTask
        onClick={() => onDone(task.id)}
        key={task.id}
        isDone={task.isDone}>
        <TaskText>{task.text}</TaskText>
        <DateString>{moment(task.createdAt).format('LL')}</DateString>
      </StyledSingleTask>
      <RemoveButton
        onClick={() => onDelete(index)}
        type="button"
        title="Delete task">X
      </RemoveButton>
    </TaskWrapper>
  )
}
export default TaskItem