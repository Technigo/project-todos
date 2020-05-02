import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import Select from 'react-select'
import { Subtitle, Label } from '../styles/Text'

export const TaskList = () => {
  const [category, setCategory] = useState('')

  const options = useSelector((store) => store.todo.options)
  const tasks = useSelector((store) => store.todo.items)

  const items = useSelector((store) => {
    if (!category) return store.todo.items
    else if (category === 'show-all') return store.todo.items
    else return store.todo.items.filter((item) => item.category === category)
  })

  const handleChange = category => {
    setCategory(category.value)
  }

  return (
    <>
      <Subtitle>{(tasks.length === 0) ? 'You have no tasks' : 'Current tasks'} </Subtitle>
      <Label>
        Show by Category:
        <Select
          value={category.value}
          onChange={handleChange}
          options={options}
        />
      </Label>
      <ul>
        {items.map((item, index) => (
          <Task key={index} item={item} />
        ))}
      </ul>
    </>
  )
}
