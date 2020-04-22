import React, { useEffect, useState } from 'react'
//import { TodoItem } from "./TodoItem.js";
//import { TodoInput } from "./TodoInput.js";
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  // Get list information from the store, for this list
const list = useSelector(store => store.todos.list)
  // Count the number of items that are done using filter
const numDone = list.items.filter(item => item.done).length

  return (
  <section className="todo-summary">
      <h2>
        {numDone}/{list.items.length} done
      </h2>
  </section>
  )
};