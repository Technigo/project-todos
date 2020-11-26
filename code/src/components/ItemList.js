import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'

export const ItemList = () => {
    const items = useSelector((state) => state.todos.items)

    return (
        <>
            <div className="items-list">
              
                    {items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                
            </div>
        </>
    )
}