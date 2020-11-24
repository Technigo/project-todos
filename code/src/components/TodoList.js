import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Todo } from 'components/Todo'
import { Select } from 'library/Select'
import { ClearButton } from 'components/ClearButton'

export const TodoList = () => {
  const [category, setCategory] = useState('')
  const items = useSelector((store) => store.todos.items)

  const todos = useSelector((store) => {
    if (!category) return store.todos.items //if no category, show all items in list
    else return store.todos.items.filter(item => item.category === category) // else we want to filter the list on category choosen
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
          <option value='Work'>Work</option>
          <option value='Study'>Study</option>
          <option value='Household'>Household</option>
          <option value='Shopping'>Shopping</option>
          <option value='Fun'>Fun</option>
          <option value='Other'>Other</option>
        </Select>
      </label>
    {/* List that maps through the todos in the global state and renders todos from todo component */}
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
    {items.length > 0 &&
    <ClearButton />} 
    </>
  )
}