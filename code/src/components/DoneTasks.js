import React from "react";
import { useDispatch, useSelector } from "react-redux";

import tasks from "reducers/tasks";

const DoneTasks = () => {

    const items = useSelector((backpack) => backpack.tasks.items)

    const dispatch = useDispatch()

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    const doneTasks = items.filter((taskItem) => taskItem.isCaught)

    const onDeleteTask = (taskId) => {
        dispatch(tasks.actions.deleteTask(taskId))
    }

    const doneSummary = doneTasks.length
     if (doneTasks < 1) {
         return (
             <h1>Done nothing</h1>
         )
     } else {
          return(
        <>
        {doneTasks.map((taskItem) => (
            <div key={taskItem.id}>
                <p>{doneSummary} task done</p>
                <h2>{taskItem.text}</h2>
                <label>
                    done:
                    <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
                </label>
                <button onClick={() => onDeleteTask(taskItem.id)}>
                <span role="img" aria-label="delete">x</span>
            </button>
            </div>
        ))}

        </>
    )
     }
}

export default DoneTasks