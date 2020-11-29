import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'
import { UserInputBox, InputText } from '../library/Containers'

export const UserInput = () => {
  const [task, setTask] = useState('')
  const [addBtn] = useState(true)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      tasks.actions.addItem({
        taskInfo: {
          id: Date.now(),
          text: task,
          done: false,
          created: Date.now(),
        },
      })
    )
    setTask('')
  }

  return (
      <UserInputBox onSubmit={handleSubmit}>
        <InputText
          rows={4}
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
