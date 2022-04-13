import React from "react";
import { useSelector } from "react-redux";

const TaskCounter = () => {
    const allTasks = useSelector((store) => store.tasks.items)
    const remainingTasks = allTasks.filter((task) => task.complete === false)

    if (allTasks.length > 0) {
        return (
            <article>
                <p>
                  Total number of tasks: {allTasks.length}
                </p>
                <p> 
                  Number of tasks left to do: {remainingTasks.length}
                </p>
            </article>
        )
    } else if (remainingTasks.length === 0) {
        return (
            <article>
                <p>You are all done!</p>
            </article>
        )
    } 
}

export default TaskCounter 