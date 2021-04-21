import React from 'react'
import { useSelector } from 'react-redux'

export const Task = () => {

    const taskList = useSelector((store => store.tasks.taskList))

    return (
        <div>
            {taskList.map(task => (
                <p>{task.taskText}</p>
            ))}
            Heloooo
        </div>
    )
}