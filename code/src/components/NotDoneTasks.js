import React from "react";
import { useDispatch, useSelector } from "react-redux";

import tasks from "reducers/tasks";
import AddTask from "./AddTask";
import state from '../assets/state.png'

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
        <button onClick={onClickAllDone}>all done</button>
        <p>{notDoneSummary} task to do</p>
        {notDoneTasks.map((taskItem) => (
        <div className="task-container" key={taskItem.id}>
        <h2>{taskItem.text}</h2>
       <label>
           Done:
        <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
       </label>
       <button className="delete-button" onClick={() => onDeleteTask(taskItem.id)}>
           <span role="img" aria-label="delete">x</span>
       </button>
       {}
     </div> 
        ))}
        <AddTask />
    </section>
        </>  
    )
}

}

export default NotDoneTasks