import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'

import './tasklist.css'
// const Tasks 

export const TaskList = () => {
    const items = useSelector((state) => state.fridge.items ) //useSelector takes a function as an argument and what the function returns will become the items list. It enokes the function with the current state in the redux-store 

    return(
        <ul>
        {items.map((item) => {
        <Item key={item.id} item={item} />
})}
    </ul>  
    )
}

// mapa över tasks
 {/* <li> */}
        {/* <button className="remove" type="button" onClick=""> */}
        {/* <span role="img">❌</span> */}
        {/* </button> */}
        {/* <label className="container"> */}
        {/* <input className="check-box" type="checkbox" onClick=""></input> */}
        {/* <span className="checkmark"></span> */}
        {/* Här kommmer mina todos */}
            {/* </label> */}
        {/* </li> */}