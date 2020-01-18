import React from 'react'
import { useSelector } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'

export const Counter = (props) => {
    const amountOfTasks = useSelector((state) => state.ToDoList.tasks)

    const completedTasks = amountOfTasks.filter(task => task.done)

    // const taskLeft = amountOfTasks - completedTasks

    return (
        <p>{completedTasks.lenght}/{amountOfTasks.length}</p>

    )
}