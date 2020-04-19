import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const ToDoSummary = () => {
  const items = useSelector(state => state.ToDo.items)
  const buyMoreItems = items.filter(item => item.needsMore)

  const [showShoppingList, setShowShoppingList] = useState(false)

  return (
    <div>
      <h1>{items.length} possible win{items.length ===1?".":"s"}!</h1>
      <h2>
        <span
          type='button'
          onClick={() => setShowShoppingList(!showShoppingList)}
        >
             List of your Gold stars
        </span>
      </h2>
      

      {showShoppingList && (
        <ul>
          {buyMoreItems.map(item => (
            <li key={item.id}>⭐️{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
