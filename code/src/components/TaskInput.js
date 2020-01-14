import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const TaskInput = ({ task }) => {

  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  return (

    <Wrapper>
      <AddButton onClick={() => dispatch(tasks.actions.addTask(newTask))}>
        +
      </AddButton>
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

`
const AddButton = styled.button`

`
const Input = styled.input`
  color: #666;
`