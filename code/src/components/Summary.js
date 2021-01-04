import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
    const items = useSelector((state) => state.todos.items)


    return (
        <div className="header">
           <h1> Groceries </h1>
           <h2>{items.length} items</h2>
        </div >
    )
}

