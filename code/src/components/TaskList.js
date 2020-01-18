import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'

export const TaskList = () => {
    const tasks = useSelector((state) => state.ToDoList.tasks)
    console.log(tasks)

    return (
        <div>
        <ul>
            {tasks.map((task) => ( <Task key={task.id} task={task} /> 
            ))}
        </ul>
        </div>
    )
}