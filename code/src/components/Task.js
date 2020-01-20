import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'


export const Task = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleComplete(props.taskName.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.taskName.id))
  }

  return (
    <List>
      <TaskItem>
        <input
          type='checkbox'
          checked={props.taskName.complete}
          onChange={handleCheckboxClick} />
      </TaskItem>
      <WrapperTask>
        {props.taskName.name}
      </WrapperTask>
      <WrapperButton>
        <Button type="button" onClick={handleRemoveButtonClick}>
          🗑️
        </Button>
      </WrapperButton>
    </List>
  )
}

const List = styled.section`
  display: flex;
`
const WrapperTask = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px; 
  justify-content: space-between; 
  width: 300px;
  color: #3e3e3e;
`

const TaskItem = styled.label`
  float: left;
`

const WrapperButton = styled.section`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 50px; 
justify-content: space-between; 
width: 350px;
padding-bottom: 30px; 
`

const Button = styled.button`
background: transparent;
color: white;
font-size: 20px; 
margin-top: 0; 
margin-right: 5px; 
width: 100px;
height: 35px; 
border: none;
`
