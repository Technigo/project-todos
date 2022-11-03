import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const NewTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

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
        <NewTaskButton type="submit" onClick={() => onAddNewTask}>Add new task</NewTaskButton>
      </NewTaskDiv>
    </form>
  )
}
export default NewTask;

// addNewTask: (store, action) => {
//   store.todos.push(action.payload)

const Input = styled.input`
border: 1px solid #DF7861;
border-radius: 20px;
`

const NewTaskButton = styled.button`
background-color: #ECB390;
border: none;
border-radius: 20px;
padding: 5px 0px;
`
const NewTaskDiv = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`