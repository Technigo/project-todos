/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { RoundedContainer } from 'lib/Container'
import { Button } from 'lib/Button'
import { Select } from 'lib/Select'

export const AddTask = () => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(remember.actions.addTask({ text, priority }))
    setText('') // clearing input
    setPriority('') // clearing input
  }

  return (
    <RoundedContainer background="#cce5ff">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="add an item"
          required />

        <label>
          Set Priority:
          <Select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}>
            <option value="">Select...</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </label>
        <Button type="submit">Add Item</Button>
      </form>
    </RoundedContainer>
  )
}