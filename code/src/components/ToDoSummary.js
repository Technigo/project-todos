import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Emoji} from "../library/Emoji"


export const ToDoSummary = () => {
  const items = useSelector(state => state.ToDo.items)
  const doneItem = items.filter(item => item.completed)
  const [showShoppingList, setShowShoppingList] = useState(false)

  return (
    <div>
      <h1>You have {doneItem.length} of {items.length} possible win{items.length ===1?".":"s"}!</h1>
      
      { doneItem.length === items.length && ( <h3> Well, done!!</h3>)
      } 

      <h2>
        <span
          type='button'
          onClick={() => setShowShoppingList(!showShoppingList)}>
        
          
            <Emoji ariaLabel="arrow-down">↓</Emoji> Reasons to Celebrate <Emoji ariaLabel="champagne-bottle">🍾</Emoji>
        </span>
      </h2>
      

      {showShoppingList && (
        <ul>
          {doneItem.map(item => (
            <li key={item.id}>⭐️{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
