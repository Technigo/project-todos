import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uuid'

import tasks from '../reducers/tasks'

const SubmitButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 22px;
  color: #757575;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  border: 1px solid #fafafa;
  padding: 10px;
  box-sizing: border-box;
`

const TaskInput = styled.input`
  border: none;
  background-color: inherit;
  width: 100%;
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
      placeholder="Add Task"
      onChange={e => setDescription(e.target.value)}
      value={description}
      />
  </Form>
  )
}