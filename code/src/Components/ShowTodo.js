import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'Components/ToDo'


export const ShowTodo = () => {
        const tasks = useSelector(state => state.list.tasks)
        const todoTasks = tasks.filter((task) => task.done === false)
        const [showTodo, setTodo] = useState()     

    return (
        <div>
        <button
            type="button"
            onClick={() => setTodo(!showTodo)}>
            Todo
        </button>

        {showTodo && (
            <p>
                {todoTasks.map((task) => (
                <Todo key={task.id} task={task} />
            ))}
            </p>
            
        )}
        </div>
    )
    }