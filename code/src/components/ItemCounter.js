import React from 'react'
import { useSelector } from 'react-redux'

export const ItemCounter = () => {
const items = useSelector((store) => store.todos.items)

const incompleteTask = items.filter(todo => todo.isComplete !== true) 

return ( 
  <div className="counter-container">
        <p>Total tasks: {items.length}</p>
        <p>Remaing tasks: {incompleteTask.length}</p>
      </div>
)
}
