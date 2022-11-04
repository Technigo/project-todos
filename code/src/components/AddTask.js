import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import uniqid from 'uniqid';
import styled from 'styled-components'

const ShowAddNewTaskButton = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
background-color: #B79DA1;
color: white;
margin-bottom: 10px;
font-size: 24px;
`
const FormWrapper = styled.div`
margin: 20px;
`

const NewTaskInput = styled.input`
  padding: 5px;
  width: 93%;
  border: 2px solid #B79DA1;
`

const AddNewTaskButton = styled.button`
padding: 3px;
`

const AddTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewTask = {
      id: uniqid(),
      task: newTask,
      completed: false
    };
    dispatch(todo.actions.addItem(addNewTask))
    setNewTask('');
  }

  return (
    <FormWrapper>
      <ShowAddNewTaskButton type="button" onClick={toggleClass}>{isActive ? '-' : '+'}</ShowAddNewTaskButton>
      <form onSubmit={handleSubmit} className={isActive ? 'active' : 'hidden'}>
        <NewTaskInput type="text" placeholder="Add new task..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <AddNewTaskButton type="submit">➕</AddNewTaskButton>
      </form>
    </FormWrapper>
  )
}
export default AddTask
