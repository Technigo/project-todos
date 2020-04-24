import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from './TaskInput.js';
import { TaskItem } from './TaskItem.js';
import { TaskSummary } from './TaskSummary.js';
import { ClearButton } from './ClearButton'

export const TaskList = () => {
  const [category, setCategory] = useState('')
  const list = useSelector((store) => {
    if (!category) return store.tasks.list.items
    else return store.tasks.list.items.filter((item) => item.category === category)
  })

  return (
    <div className="taskList">
      <TaskInput />
      <label style={{ color: 'black' }}>
        Show by Category:
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value='Do'>Do:</option>
          <option value='Pay'>Pay:</option>
          <option value='Buy'>Buy:</option>
          <option value='Mail'>Mail:</option>
          <option value='Call'>Call:</option>
          <option value=''>ALL</option>
        </select>
      </label>
      {list.map((item, index) => (
        <TaskItem key={index} item={item} itemIndex={index} />
      ))}
      <TaskSummary />
      <ClearButton />
    </div>
  )
}