import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const FridgeSummary = () => {
  const items = useSelector(state => state.fridge.items)
  const buyMoreItems = items.filter(item => item.needsMore)

  const [showShoppingList, setShowShoppingList] = useState(false)

  return (
    <div>
      <h1>In my fridge I have {items.length} items.</h1>
      <h2>
        I need to buy {buyMoreItems.length} item
        {buyMoreItems.length === 1 ? '.' : 's.'}
        <span
          type='button'
          onClick={() => setShowShoppingList(!showShoppingList)}
        >
          💡
        </span>
      </h2>

      {showShoppingList && (
        <ul>
          {buyMoreItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
