import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from './TaskInput.js';
import { TaskItem } from './TaskItem.js';
import { TaskSummary } from './TaskSummary.js';
import { ClearButton } from './ClearButton'

export const TaskList = () => {
  const [category, setCategory] = useState('')
  const list = useSelector((store) => {
    if (!category) {
      console.log('no category!')
      return store.tasks.list.items
    } else {
      console.log('category chosen!', category)
      return store.tasks.list.items.filter((item) => item.category === category)
    }
  })

  return (
    <div className="taskList">
      <TaskInput />
      <label className="filtCat">
        SHOW BY CATEGORY
        <select className="selectCats"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value='Do'>DO</option>
          <option value='Pay'>PAY</option>
          <option value='Buy'>BUY</option>
          <option value='Mail'>MAIL</option>
          <option value='Call'>CALL</option>
          <option value=''>ALL</option>
        </select>
      </label>
      {list.map((item, index) => (
        <TaskItem key={index} item={item} />
      ))}
      <TaskSummary />
      <ClearButton />
    </div>
  )
}

