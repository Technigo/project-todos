import React, { useState } from 'react'

import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  background-color: orange;
  padding: 20px 20px 10px 25px;
  width: 80%;
`

const TextField = styled.input`
  background-color: yellow;
`

const TaskButton = styled.button`
  background-color: yellow;
`

export const AddTask = () => {
  const [newTask, setNewTask] = useState()

  return (
    <Container>
      <TextField
        type="text"
        value={newTask}
        onChange={event => setNewTask(event.target.value)}
      />
      <TaskButton
        type="submit"
      >
        Add +
      </TaskButton>
    </Container>
  )
}