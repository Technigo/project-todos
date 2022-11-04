import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import uniqid from 'uniqid';
import styled from 'styled-components'

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
      <Form onSubmit={handleSubmit} className={isActive ? 'active' : 'hidden'}>
        <InputWrapper>
          <NewTaskInput type="text" placeholder="Add new task..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <AddNewTaskButton type="submit">+</AddNewTaskButton>
        </InputWrapper>
      </Form>
    </FormWrapper>
  )
}
export default AddTask

const Form = styled.form`
  &.hidden {
    display: none;
  }
  &.active {
    display: block; 
  }
`

const ShowAddNewTaskButton = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
background-color: #B79DA1;
color: white;
margin-bottom: 10px;
font-size: 24px;
font-weight: bold;
`
const FormWrapper = styled.div`
margin: 20px;
`

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

const NewTaskInput = styled.input`
  border: 2px solid #B79DA1;
  margin: 0px;
  padding: 10px;
  width: 100%;
  outline: none;
  height: 30px;
  border-radius: 5px;
`

const AddNewTaskButton = styled.button`
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  height: 30px;
  cursor: pointer;
  color: white;
  background-color: rgba(0,126,159,0.7);
  font-size: 24px;
  font-weight: bold;
`
