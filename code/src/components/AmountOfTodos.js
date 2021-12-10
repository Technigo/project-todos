import React from "react"
import { useSelector } from "react-redux"

const AmountOfTodos = () => {
    const amount = useSelector(store => store.todos.items.length)
    return <h1>You have {amount} todos left today</h1>
}

export default AmountOfTodos