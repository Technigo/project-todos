import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Emoji} from "../library/Emoji"
import {Title, Subtitle, P} from "library/Text"

export const ToDoSummary = () => {
  const items = useSelector(state => state.ToDo.items)
  const doneItem = items.filter(item => item.completed)
  const [showSuccess, setShowShoppingList] = useState(false)

  return (
    
    <div>
      <Title>You have {doneItem.length} of {items.length} possible win{items.length ===1?".":"s"}!</Title>
      
      { doneItem.length === items.length && ( <Title> Well, done!!</Title>)
      } 
 {showSuccess && (
        <ul>
          {doneItem.map(item => (
            <li key={item.id}>⭐️{item.name}</li>
          ))}
        </ul>
      )}
      <h2>
        <span
          type='button'
          onClick={() => setShowShoppingList(!showSuccess)}>
            <Subtitle>
              <Emoji ariaLabel="arrow-down">↓</Emoji><P> Reasons  to Celebrate </P><Emoji ariaLabel="champagne-bottle">🍾</Emoji>
            </Subtitle>
        </span>
      </h2>
      
    </div>
  )
}
