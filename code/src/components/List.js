/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Task } from 'components/Task'
import { ClearDone } from 'components/ClearDoneButton'
import { ClearButton } from 'components/ClearButton'
import { Select } from 'lib/Select'
import { RoundedContainer } from 'lib/Container'

export const List = () => {
  const [priority, setPriority] = useState('')
  const items = useSelector((state) => {
    if (!priority) return state.remember.items
    else return state.remember.items.filter((item) => item.priority === priority)
  })

  return (
    <>
      <RoundedContainer background="pink">
        <label>
          Filter by:
          <Select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="">Show All</option>
          </Select>
        </label>
        <ClearDone />
        <ClearButton />
      </RoundedContainer>
      <span>
        {items.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </span>
    </>
  )
}