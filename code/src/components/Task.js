import React from 'react'


export const Task = ({props}) =>{
    return(
        <li>{props.text}
        <label>
            <input type="checkbox" />
            </label>
            </li>
    )
}