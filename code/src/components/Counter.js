import React from 'react'
import { useSelector } from 'react-redux'
import 'components/Counter.css'


export const Counter = () => {

    const items = useSelector((state) => state.tasks.items)
    const tasksDone = items.filter((item) => item.completed)


    return (
        <div className="counter-container">
            <h2>Great Job!</h2>
            <h3>You've completed:</h3>
            {tasksDone.length}/{items.length}

        </div>
    )
}