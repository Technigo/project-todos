import React from 'react'
import { useSelector } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'

export const Counter = (props) => {
    const amountOfTasks = useSelector((state) => state.ToDoList.tasks)
    const completedTasks = amountOfTasks.filter(task => !task.done)

    return (
        <p> {completedTasks.length} /{amountOfTasks.length}</p>
    )
}