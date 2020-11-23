import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Todo } from 'components/Todo'
import { Select } from 'library/Select'
import { ClearButton } from 'components/ClearButton'

export const TodoList = () => {
  const [category, setCategory] = useState('')
  
  const todos = useSelector((store) => {
    if (!category) return store.todos.items
    else return store.todos.items.filter(item => item.category === category)
  })

  return (
    <>
    {/* dropdown to filter by categories: */}
    {/* I don't want all categories to show if no task has that category.
    How do I do that? */}
      <label>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Filter by category:</option>
          <option value='work'>work</option>
          <option value='study'>study</option>
          <option value='household'>household</option>
          <option value='shopping'>shopping</option>
          <option value='fun'>fun</option>
          <option value='other'>other</option>
        </Select>
      </label>
    {/* List that maps through the todos in the global state and renders todos from todo component */}
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
    <ClearButton />
    </>
    // Here I should add a button to clear list (remove all todo's)
  )
}