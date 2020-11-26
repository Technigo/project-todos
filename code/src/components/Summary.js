import React from 'react'
import { useSelector } from 'react-redux'


export const Summary = () => {
    const items = useSelector((store) => store.todos.items)
    const completedTasks = items.filter((item) => item.complete)

    return (
        <div>
            <p>You have done {completedTasks.length} out of {items.length} tasks</p>
        </div>
    )
}