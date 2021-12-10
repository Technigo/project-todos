import React from "react"
import { useSelector } from "react-redux"

const AmountOfTodosLeft = () => {
    const notCompletedAmount = useSelector(store => {
        return  store.todos.items.filter(todo => !todo.isComplete).length
    })

    return (
        <h1>You have {notCompletedAmount} tasks left today</h1>
    )
}

export default AmountOfTodosLeft