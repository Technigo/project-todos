import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { shopping } from 'reducers/shopping'
import './ShoppingSummary.css'


export const ShoppingSummary = () => {
    const items = useSelector(state => state.shopping.items)
    const buyMoreItems = items.filter(item => item.needsMore === true)

    const [showShoppingList, setShowShoppingList] = useState(false)

    return (
        <section className="shoppingSummary">
            <h4>I have {items.length} items in my fridge</h4>
            <h2>I need to buy more of {buyMoreItems.length} item
                {buyMoreItems.length === 1 ? "." : "s."}
                <span className="shoppingIcon" onClick={() => setShowShoppingList(!showShoppingList)}> 🛍 </span>
            </h2>

            {showShoppingList && (
                <ol>
                    {buyMoreItems.map(item => <li key={item.id}>{item.name}</li>)}
                </ol>
            )}
        </section>
    )
}