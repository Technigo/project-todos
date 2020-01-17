import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'components/Counter.css'
import { tasks } from 'reducers/tasks' //?

export const Counter = (props) => {
    const dispatch = useDispatch()
    const amountOfTasks = useSelector((state) => state.tasks.items.length)

    //need to figure out what the current Task is or how to collect the info
    const currentTask = useSelector((state) => state.tasks.items.length)

    // const currentTask === state.tasks.items.needsMore.length
    // const handleTasksLeft = () => {
    //     dispatch(tasks.actions.completedTask(props.task.length))
    // }
    // const tasksLeft = amountOfTasks - handleTasksLeft

    const tasksLeft = amountOfTasks - currentTask



    return (
        <div className="counter-container">
            <h2>Good Job</h2>
            <h3>You've completed:</h3>
            {tasksLeft}/{amountOfTasks}
        </div>

    )


}