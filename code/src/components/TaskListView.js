import React from 'react'
import { useSelector } from 'react-redux'
// import { Task } from 'components/Task'

export const TaskListView = () => {

    const taskList = useSelector((store => store.tasks.taskList))

    return (
        <div>
            {taskList.map((task, id) => (
                <div key={id}>
                    <p>{task.taskText}</p>
                </div>
            ))}
        </div>
    )
}