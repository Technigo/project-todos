import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'
import './ItemList.css'

export const ItemList = () => {
    const items = useSelector((state) => state.fridge.items)
    return (
        <ul>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    )
}