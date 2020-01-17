import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'Components/ToDo'
import './list.css'

export const List = () => {
    const tasks = useSelector ((state) => state.list.tasks)
    return (
        <div>
            {tasks.map((task) => (
                <Todo key={task.id} task={task} />
            ))}
        </div>
    )

}