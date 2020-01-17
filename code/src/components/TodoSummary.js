import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const FridgeSummary = () => {
  const items = useSelector(state => state.fridge.items)
  const buyMoreItems = items.filter(item => item.needsMore)

  const [showShoppingList, setShowShoppingList] = useState(false)

  return (
    <section class="tasksleft">
      <h2>You have {items.length} task
      {items.length === 1 ? ' ' : 's'} left.</h2>
      
      <h3>
        You have finished {buyMoreItems.length} task
        {buyMoreItems.length === 1 ? '.' : 's.'}
        {buyMoreItems.length === 0 ? '' : ' Good job!'}
      </h3>

      {showShoppingList && (
        <ul>
          {buyMoreItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </section>
  )
}