import React from 'react'
import { useSelector } from 'react-redux'
import 'components/Counter.css'

export const Counter = () => {
    const amountOfTasks = useSelector((state) => state.tasks.length)

    //need to figure out what the current Task is
    const currentTask = useSelector((state) => state.tasks.id)

    const tasksLeft = amountOfTasks - currentTask



    return (
        <div className="counter-container">
            <h2>Good Job</h2>
            <h3>You've completed:</h3>
            {tasksLeft}/{amountOfTasks}
        </div>

    )


}