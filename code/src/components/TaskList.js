import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'

export const TaskList = () => {
  const [category, setCategory] = useState('')
  const items = useSelector((store) => {
    if (!category) return store.todo.items
    else return store.todo.items.filter((item) => item.category === category)
  })

  return (
    <>
      <label>
        Show by Category:
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>All</option>
          <option value='To-Do'>To-Do</option>
          <option value='Shopping'>Shopping</option>
          <option value='Work'>Work</option>
          <option value='Family'>Family</option>
        </select>
      </label>
      <ul>
        {items.map((item, index) => (
          <Task key={index} item={item} />
        ))}
      </ul>
    </>
  )
}
