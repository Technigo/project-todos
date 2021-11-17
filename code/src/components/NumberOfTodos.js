import React from "react"
import { useSelector } from "react-redux"

const NumberOfTodos = () => {

    const number = useSelector(store => store.todos.items.length)

    return <h4> You have {number} todos</h4>
}

export default NumberOfTodos