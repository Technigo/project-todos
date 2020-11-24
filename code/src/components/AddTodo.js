import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [ text, setAddItem ] = useState('')
  const [ id, setaddId ] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      tasks.actions.addItem({
        id, 
        text,
        complete: false
      })
    )
    setaddId(id + 1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(event) => setAddItem(event.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  )
}

