import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const TaskInput = ({ task }) => {

  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()
  const handleAddTask = () => {
    dispatch(tasks.actions.addTask(newTask))
    setNewTask('')
    //Prevent from adding empty task
  }

  return (

    <Wrapper>
      <AddButton onClick={handleAddTask}>+</AddButton>
      <Input
        type='text'
        required
        placeholder='Add task'
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
      />
    </Wrapper>
  )

}

const Wrapper = styled.section`
  background: #f2f2f2;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
`
const AddButton = styled.button`
  background: transparent;
  color: #666;
  // font-size: 22px;
  border: none;
  height: 20px;
  width: 20px;
  margin-right: 5px;
`
const Input = styled.input`
  color: #666;
  border: none;
  background: transparent;
  padding: 10px 5px;
`