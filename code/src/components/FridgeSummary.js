import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { fridge } from 'reducers/fridge'


export const FridgeSummary = () => {
    const items = useSelector(state => state.fridge.items)
    const buyMoreItems = items.filter(item => item.needsMore === true)

    const [showShoppingList, setShowShoppingList] = useState(false)

    return (
        <section>
            <h1>I have {items.length} items in my fridge</h1>
            <h2>I need to buy more of {buyMoreItems.length} item
                {buyMoreItems.length === 1 ? "." : "s."}
                <span onClick={() => setShowShoppingList(!showShoppingList)}> 🛍 </span>
            </h2>

            {showShoppingList && (
                <ol>
                    {buyMoreItems.map(item => <li key={item.id}>{item.name}</li>)}
                </ol>
            )}
        </section>
    )
}