import React from 'react'
import { useSelector } from 'react-redux'
import { AddToList } from 'components/AddToList'
import './ShoppingList.css'

export const ShoppingList = () => {
    const items = useSelector((state) => state.shopping.items)
    return (
        <container className="itemListContainer">
            <ul>
                {items.map((item) => (
                    <AddToList key={item.id} item={item} />
                ))}
            </ul>
        </container>
    )
}