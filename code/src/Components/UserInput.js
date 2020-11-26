import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'
import { UserInputBox, InputText } from '../library/Containers'

//This will be sent to the array inside tasks.js

export const UserInput = () => {
  const [task, setTask] = useState('')
  const [addBtn, setAddBtn] = useState(true)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      tasks.actions.addItem({
        taskInfo: {
          id: Date.now(),
          text: task,
          done: false,
        },
      })
    )
    setTask('')
  }

  return (
      <UserInputBox onSubmit={handleSubmit}>
        <InputText
          placeholder='Add task'
          onChange={(event) => setTask(event.target.value)}
          value={task}
        ></InputText>
        <Button addBtn={addBtn} type='submit'>
          Add Task
        </Button>
      </UserInputBox>
  )
}
