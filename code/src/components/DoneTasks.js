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

    const onClickAllTasksDelete = (taskId) => {
        dispatch(tasks.actions.allTasksDelete(taskId))
    }

    const doneSummary = doneTasks.length


     if (doneTasks < 1) {
         return (
             <h1>Done nothing</h1>
         )
     } else {
          return(
        <>
        <section className="done-wrapper">
        <button onClick={onClickAllTasksDelete}>delete all</button>
        <p>{doneSummary} task done </p>
        {doneTasks.map((taskItem) => (
            <div className="task-container" key={taskItem.id}>
                <h2>{taskItem.text}</h2>
                <label>
                    done:
                    <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
                </label>
                <button className="delete-button" onClick={() => onDeleteTask(taskItem.id)}>
                <span role="img" aria-label="delete">x</span>
            </button>
            </div>
        ))}
        </section>
        </>
    )
     }
}

export default DoneTasks