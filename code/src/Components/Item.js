import React from 'react'

export const Item = ({ item }) => {
    return(
        <li>
            {console.log(item)}
            {item.text}
        </li>
    )
}