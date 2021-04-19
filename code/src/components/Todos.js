import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import './Todos.css'


//TASKLIST
export const Todos = () => {
    const allTodos = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    return (
        <div>
            {allTodos.map(todo => (
                <div key={todo.id} className="task-container">
                    <p>{todo.text}</p>
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                </div>
            ))}
        </div>
    )
}