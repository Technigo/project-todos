import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'

export const ItemList = () => {
    return (
        <ul>
            {/* {items.map((item) => (
                <Item key={item.id} item={item} />
            ))} */}
        </ul>
    )
}