import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const NewTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

  const allTasks = useSelector((store) => store.tasks.todos);
  const tasksMarkedAsDone = allTasks.filter((task) => !task.isDone)

  const onAddNewTask = (event) => {
    event.preventDefault()

    const newTodo = {
      // creates a unique id
      id: Date.now().toString(),
      title: newTask,
      isDone: false
    }

    dispatch(tasks.actions.addNewTask(newTodo))
    // clears the form
    setNewTask('')
  }
  return (
    <NewTaskDiv>
      <form onSubmit={onAddNewTask}>
        <Input
          type="text"
          placeholder="Add new task here"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          required />
        <NewTaskButton type="submit" onClick={() => onAddNewTask}>Add new task</NewTaskButton>
      </form>
      <TasksLeft>
        Tasks left: {tasksMarkedAsDone.length} / {allTasks.length}
      </TasksLeft>
    </NewTaskDiv>

  )
}
export default NewTask;

const NewTaskDiv = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
align-items: center;
`

const Input = styled.input`
border: 1px solid #DF7861;
border-radius: 20px;
width: 80%;
padding: 5px;

@media (min-width: 668px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 1025px) {
    width: 100%;
  }

&:focus {
    outline: none;
    border-color: #FCF8E8;
  }
::placeholder,
  ::-webkit-input-placeholder {
    color: #ECB390;
  }
`

const NewTaskButton = styled.button`
background-color: #ECB390;
border: none;
font-size: 13px;
border-radius: 10px;
padding: 5px 8px;
margin: 10px 0px;

@media (min-width: 668px) and (max-width: 1024px) {
  font-size: 15px;
  }
  @media (min-width: 1025px) {
    font-size: 17px;
  }
`

const TasksLeft = styled.p`
font-family: 'Libre Franklin', sans-serif;
font-size: 13px;
padding: 5px;
margin: 5px;
align-self: flex-end;

@media (min-width: 668px) and (max-width: 1024px) {
  font-size: 15px;
  }
  @media (min-width: 1025px) {
    font-size: 17px;
  }
`

