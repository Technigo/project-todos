import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
    const items = useSelector((state) => state.todos.items)
    const buyMoreItems = items.filter((item) => item.needsMore)

    const [showShoppingList, setShowShoppingList] = useState(false)

    return (
        <div>
            <h1>Items to buy  {items.length}</h1>
        </div>
    )
}