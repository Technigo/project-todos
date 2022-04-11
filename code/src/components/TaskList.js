import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "reducers/tasks";
import DoneTasks from "./DoneTasks";
import NotDoneTasks from "./NotDoneTasks";

const TaskList = () => {
    // const taskList = useSelector((backpack) => backpack.tasks.items)

    // const dispatch = useDispatch()

    // const onTaskToggle = (taskId) => {
    //     dispatch(tasks.actions.toggleItem(taskId))
    // }

    // const onDeleteTask = (taskId) => {
    //     dispatch(tasks.actions.deleteTask(taskId))
    // }


return (
    <div>
        <NotDoneTasks />
        {/* <h2>DONE</h2>
        <DoneTasks /> */}
        {/* {taskList.map(taskItem => (
        <article key={taskItem.id}>
             <h2>{taskItem.text}</h2>
            <label>
                Done (is caught):
             <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
            </label>
            <button onClick={() => onDeleteTask(taskItem.id)}>
                <span role="img" aria-label="delete">x</span>
            </button>
        </article> 
     ))} */}
    </div>
)
}

export default TaskList