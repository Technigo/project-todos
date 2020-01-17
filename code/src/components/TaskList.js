import React from 'react'
import { useSelector } from 'react-redux'
import 'components/TaskList.css'
import { Task } from 'components/Task'


export const TaskList = () => {

    const allTasks = useSelector((state) => state.tasks.items)
    console.log(allTasks)



    return (
        <div>

            <ul className="task-list-container">
                {allTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}