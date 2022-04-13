import React from "react";
import { useDispatch, useSelector } from "react-redux";

import tasks from "reducers/tasks";
import state from '../assets/state.png'
import trash from '../assets/trash.svg'

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
            <section className="section-wrapper">
            <img className="tasklist-img" src={state} alt="tasklist" />
            </section>
         )
     } else {
          return(
        <>
        <section className="done-wrapper">
        <p className="task-to-do">{doneSummary} done by now! </p>
        {doneTasks.map((taskItem) => (
            <div className="task-container" key={taskItem.id}>
                <div className="task-and-input">
                <h2>{taskItem.text}</h2>
                <label className="task-label">
                    <input id="checkbox" type="checkbox" hidden checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
                    <label for="checkbox" class="checkbox"><span class="icon"></span></label>
                </label>
                </div>
                <button className="delete-button" onClick={() => onDeleteTask(taskItem.id)}>
                <img src={trash} />
            </button>
            </div>
        ))}
        <button className="delete-all-button" onClick={onClickAllTasksDelete}>Delete all</button>
        </section>
        </>
    )
     }
}

export default DoneTasks