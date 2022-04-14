import React, { useState} from 'react'
import { useSelector } from 'react-redux'



export const TaskList = () => {

    const allTasks = useSelector((store) => store.tasks.items)
    // const [tasks, setTasks] = useSelector((store) => store.tasks.items)

    return (
        <div> 
        {allTasks.map((task) => (

            <div key={task.id} >{task.title}</div>
        ))}
        </div>
    )
}