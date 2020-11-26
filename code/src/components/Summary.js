import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
    const items = useSelector((state) => state.todos.items)
    const buyMoreItems = items.filter((item) => item.needsMore)

    const [showShoppingList, setShowShoppingList] = useState(false)

    return (
        <div className="item-buy">
            <h1>Buy {items.length} items  </h1>
        </div>
    )
}