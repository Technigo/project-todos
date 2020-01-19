import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'Components/ToDo'


export const ShowDone = () => {
        const tasks = useSelector(state => state.list.tasks)
        const doneTasks = tasks.filter((task) => task.done === true)
        const [showDone, setShowDone] = useState()
   
    return (
        <div>
        <button
            type="button"
            onClick={() => setShowDone(!showDone)}>
            Done
        </button>

        {showDone && (
            <p>
                {doneTasks.map((task) => (
                <Todo key={task.id} task={task} />
            ))}
            </p>
            
        )}
        </div>
    )
    }