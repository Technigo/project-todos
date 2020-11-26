/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Task } from 'components/Task'
import { ClearDone } from 'components/ClearDoneButton'
import { ClearButton } from 'components/ClearButton'
import { Select } from 'lib/Select'

export const List = () => {
  const [priority, setPriority] = useState('')
  const items = useSelector((state) => {
    if (!priority) return state.remember.items
    else return state.remember.items.filter((item) => item.priority === priority)
  })

  return (
    <>
      <label>
        Filter by:
        <Select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
          <option value="">show all</option>
        </Select>
      </label>
      <ClearDone />
      <ClearButton />
      <span>
        {items.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </span>
    </>
  )
}

// this component displays all tasks as a list
// later: add filter functionality