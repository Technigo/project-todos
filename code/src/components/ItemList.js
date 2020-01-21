import React from 'react'
import { useSelector } from 'react-redux'
import { AddToList } from 'components/AddToList'
import './ItemList.css'

export const ItemList = () => {
    const items = useSelector((state) => state.fridge.items)
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