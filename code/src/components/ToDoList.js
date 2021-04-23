import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import todos from 'reducers/todos'
import NoToDos from 'components/NoToDos'

const ToDoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)

  const noTasks = (tasks.length === 0)
  
  const dispatch = useDispatch()

    return(
    <>
      {noTasks ?
      <NoToDos /> : (
      <TaskContainer>
        {tasks.map(todo => (
          <SingleTaskContainer key={todo.id}>            
            {/* Checkboxes are styled in CSS file*/}
            <label className='checkbox'>
              <input
                type='checkbox'
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              />
              <span className='checkmark'></span>
            </label>
            <TextContainer>
              <Task>
                {todo.description}
              </Task>
              <Time>
                {moment(todo.time).format('ddd HH:mm')}
              </Time>
            </TextContainer>
            <RemoveButton
              type='button'
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
                X
            </RemoveButton>
          </SingleTaskContainer>
        ))}
      </TaskContainer>
      )}
    </>
    )
}

export default ToDoList

const TaskContainer = styled.div`
width: 80%;
min-height: 320px;
background-color: white;
margin: auto;
 @media (min-width: 768px) {
  width: 60%;
 }
 @media (min-width: 1024px) {
  width: 40%;
 }
`
const SingleTaskContainer = styled.div`
display: flex;
align-items: center;
position: relative;

min-height: 79px;
background-color: white;
border-bottom: solid 1px grey;
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

width: 75%;
min-height: 79px;
padding: 12px 0 12px 10%;
 @media (min-width: 768px) {
  width: 82%;
 }
`
const Task = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 16px;
font-weight: 300;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const Time = styled.p`
align-self: flex-end;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
color: rgb(182, 179, 179);
padding-top: 5px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const RemoveButton = styled.button`
position: absolute;
right: 15px;
border: none;
background-color: #eac8af;
width: 20px;
height: 20px;
border-radius: 50%;
opacity: 0.8;
color: white;
font-size: 12px;
padding: 0;
&:hover {
  cursor: pointer;
}
`