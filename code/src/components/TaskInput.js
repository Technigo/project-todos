import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const TaskInput = () => {

  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()
  const handleAddTask = () => {
    dispatch(tasks.actions.addTask(newTask))
    setNewTask('')
  }

  return (
    <Wrapper>
      <AddButton disabled={newTask.length === 0} onClick={handleAddTask}>+</AddButton>
      <Input
        type='text'
        required
        placeholder='Add task'
        maxLength='100'
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
        // To add the task when hitting enter key
        onKeyPress={(event) => { event.key === "Enter" && handleAddTask() }}
      />
    </Wrapper>
  )

}

const Wrapper = styled.section`
  background: #f2f2f2;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
`
const AddButton = styled.button`
  background: transparent;
  color: #666;
  border: none;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`
const Input = styled.input`
  font-size: 16px;
  color: #666;
  border: none;
  background: transparent;
  padding: 5px 5px;
  margin: 5px 0;
  width: 90%;
  &:focus {
    outline-style: none;
    border-bottom: 1px dashed #666;
    color: #333;
  }
`