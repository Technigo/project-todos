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

    const onDeleteTask = (taskId) =>{
        dispatch(tasks.actions.deleteTask(taskId))
    }

    return(
        <>
        <h1>DONE</h1>
        {doneTasks.map((taskItem) => (
            <div>
                <h2>{taskItem.text}</h2>
                {/* <label>
                    done:
                    <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
                </label> */}
                <button onClick={() => onDeleteTask(taskItem.id)}>
                <span role="img" aria-label="delete">x</span>
            </button>
            </div>
        ))}

        </>
    )
}

export default DoneTasks