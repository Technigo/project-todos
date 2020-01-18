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

      {props.taskName.name}

      <TaskItem>
        <input
          type='checkbox'
          checked={props.taskName.complete}
          onChange={handleCheckboxClick} />
      </TaskItem>


      <Button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </Button>

    </List>
  )
}

const List = styled.ul`
// display: flex;
// align-items: center;
// align-items: center;
// justify-content: space-evenly; 
padding-inline-start: 0;
padding-left: 0;

`

// const WrapperTask = styled.ul`
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// padding-inline-start: 0;
// padding-left: 0;
// `


const TaskItem = styled.label`
  // float: left;
  `

// const WrapperRemoveButton = styled.section`
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// padding-inline-start: 0;
// padding-left: 0;
// `

const Button = styled.button`
background - color: black;
color: black;
font - size: 20px;
margin - top: 20px;
margin - right: 5px;
border - radius: 50px;
width: 100px;
height: 35px;

`
