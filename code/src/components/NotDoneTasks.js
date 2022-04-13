import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import tasks from "reducers/tasks";
import AddTask from "./AddTask";

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

    const date = new Date()

    const notDoneSummary = notDoneTasks.length
    
     if (notDoneTasks < 1) {
         return (
            <>
             <h1>Nothing to do</h1>
            <AddTask />
            </>
         )
     } else {
         
        return(
        <>
        <button onClick={onClickAllDone}>all done</button>
        <p>{notDoneSummary} task to do</p>
        {notDoneTasks.map((taskItem) => (
        <article key={taskItem.id}>
        <h2>{taskItem.text}</h2>
        <p>{moment(date).format('ll')}</p>
       <label>
           Done (is caught):
        <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
       </label>
       <button onClick={() => onDeleteTask(taskItem.id)}>
           <span role="img" aria-label="delete">x</span>
       </button>
       {}
   </article> 
        ))}
        <AddTask />
        </>  
    )
}

}

export default NotDoneTasks