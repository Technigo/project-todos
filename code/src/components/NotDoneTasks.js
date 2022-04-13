import React from "react";
import { useDispatch, useSelector } from "react-redux";

import tasks from "reducers/tasks";
import AddTask from "./AddTask";
import state from '../assets/state.png'
import trash from '../assets/trash.svg'

const NotDoneTasks = () => {

    const items = useSelector((backpack) => backpack.tasks.items)

    const notDoneTasks = items.filter((taskItem) => !taskItem.isCaught);

    const dispatch = useDispatch()

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    const onDeleteTask = (taskId) => {
        dispatch(tasks.actions.deleteTask(taskId))
    }

    const onClickAllDone = () => {
        dispatch(tasks.actions.allTasksDone())
    }

    const notDoneSummary = notDoneTasks.length

     if (notDoneTasks < 1) {
         return (
            <>
            <section className="section-wrapper">
            <img className="tasklist-img" src={state} alt="tasklist" />
            <AddTask />
            </section>
            </>
         )
     } else {
         
        return(
        <>
        <section className="not-done-wrapper">
        <p className="task-to-do">{notDoneSummary} still to be done</p>
        {notDoneTasks.map((taskItem) => (
        <div className="task-container" key={taskItem.id}>
            <div className="task-and-input">
        <h2>{taskItem.text}</h2>
       <label className="task-label">
        <input id="checkbox" type="checkbox" hidden checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
        <label for="checkbox" class="checkbox"><span class="icon"></span></label>
       </label>
       </div>
       <button className="delete-button" onClick={() => onDeleteTask(taskItem.id)}>
        <img src={trash} alt="trash"/>
       </button> 
       {}
     </div> 
        ))}
        <button className="all-button" onClick={onClickAllDone}>All done</button>
         <AddTask />
    </section>
        </>  
    )
}

}

export default NotDoneTasks