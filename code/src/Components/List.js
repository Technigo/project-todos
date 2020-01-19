import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'Components/ToDo'
import './list.css'

export const List = () => {
    const tasks = useSelector ((state) => state.list.tasks)
    const doneTasks = tasks.filter((task) => task.done === true)
    const todoTasks = tasks.filter((task) => task.done === false)
    const [showTodo, setShowTodo] = useState(true)
    return (
       
        <div>
            <button
                type="button"
                onClick={() => setShowTodo(true)}>
                Todo
            </button>
            <button
                type="button"
                onClick={() => setShowTodo(false)}>
                Done
            </button>
            
            {showTodo && (
            <p>
                {todoTasks.map((task) => (
                <Todo key={task.id} task={task} />
            ))}
            </p>
            
        )}
        {!showTodo && (
            <p>
                {doneTasks.map((task) => (
                <Todo key={task.id} task={task} />
            ))}
            </p>
        )} 
        </div>
    )

}