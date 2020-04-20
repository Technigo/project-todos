import React from 'react'
import { useSelector } from 'react-redux'


export const Test = () => {
  // Call data using useSelector and store them in a variable
  const todo = useSelector((store) => store.reducer.todoListItems)
  return (
    <section>

      {todo.items.map((item) => (
        <p>{item.id} {item.description} {item.startDate} {item.dueDate} {item.category}</p>
      ))}

    </section>
  )
}