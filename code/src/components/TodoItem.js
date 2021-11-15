import React from 'react'
//import { useDispatch } from 'react-redux'
import './TodoItem.css'

export const TodoItem = (id, item, done) => {
    // const dispatch = useDispatch();

    return (
        <li className="item">
            {item}
        </li>
    )
}
