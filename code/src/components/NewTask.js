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
    <form onSubmit={onAddNewTask}>
      <NewTaskDiv>
        <Input
          type="text"
          placeholder="Add new task here"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          required />
        <NewTaskAndTasksLeft>
          <NewTaskButton type="submit" onClick={() => onAddNewTask}>Add new task</NewTaskButton>
          <TasksLeft>
            Tasks left: {tasksMarkedAsDone.length}
          </TasksLeft>
        </NewTaskAndTasksLeft>
      </NewTaskDiv>
    </form>
  )
}
export default NewTask;

const NewTaskDiv = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
align-items: flex-end;
`

const Input = styled.input`
border: 1px solid #DF7861;
border-radius: 20px;
width: 100%;
`
const NewTaskAndTasksLeft = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 `

const NewTaskButton = styled.button`
background-color: #ECB390;
border: none;
border-radius: 10px;
padding: 5px 8px;
margin: 10px 0px;
`

const TasksLeft = styled.p`
font-family: 'Libre Franklin', sans-serif;
font-size: 13px;
padding: 5px;
`

