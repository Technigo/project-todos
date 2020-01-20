import React from 'react'

export const Item = (props) => {
    return (
        <li>
            {props.item.name}
            <label>
                Buy More!
                <input type="checkbox" />
            </label>
        </li>
    )
}