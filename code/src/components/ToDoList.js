import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

export const ToDoList = () => {
    const tasks = useSelector((store) => store.todos.tasks)

    const dispatch = useDispatch();
    return (
        <div>
           {tasks.map(todo => (
            <div key={todo.id}>
                <p>{todo.description}</p>
                <input 
                    type='checkbox' 
                    checked={todo.isComplete}
                    onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                />
            </div>
        ))} 
        </div>
    )
}
