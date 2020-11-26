/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { Container } from 'lib/Container'
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
    <Container>
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
            <option value="">select...</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </Select>
        </label>
        <Button type="submit">Add Item</Button>
      </form>
    </Container>
  )
}