import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uuid'

import tasks from '../reducers/tasks'

const SubmitButton = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: #50E3A4;
  padding: 0;
  margin: 0;
  font-size: 25px;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 90%;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    max-width: 700px;
    padding-left: 50px;
  }
`

const TaskInput = styled.input`
  border: none;
  background-color: inherit;
  width: 90%;
  font-size: 18px;
  box-sizing: border-box;
  padding: 10px;
  margin-left: 15px;

  &:focus {
    outline: none;
    border: 1px solid #ffffff;
  }
`

export const TaskForm = () => {
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onTaskSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      description: description,
      isCompleted: false
    }

    dispatch(tasks.actions.addTask(newTask))
    setDescription('')
  }

  return (
    <Form>
      <SubmitButton type="submit" onClick={onTaskSubmit}>+</SubmitButton>
      <TaskInput 
      type="text"
      placeholder="Add task"
      onChange={e => setDescription(e.target.value)}
      value={description}
      />
  </Form>
  )
}