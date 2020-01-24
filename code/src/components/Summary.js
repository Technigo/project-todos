import React from 'react'
import { todos } from 'reducers/todos'
import { useSelector } from 'react-redux'

export const Summary = () => {
    const items = useSelector(state => state.todos.items)
    return(
    <h1>I have {items.length} ite{items.length ===1 ? "m" : "ms"} in my to-do's list</h1>
    )

}