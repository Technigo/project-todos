import React from 'react'
import { useSelector } from 'react-redux'

const TaskCounter = () => {
    const items = useSelector((store) => store.todos.items)
    return (
        <h2>You have {items.length} tasks</h2>
    )
}

export default TaskCounter