import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import './Todos.css'
import { DeleteButton } from './DeleteButton';


//TASKLIST
export const Todos = () => {
    const allTodos = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    if (allTodos.lenght <= 0) {
        return(

            // ADD PAGE WITH GIF?
            <p>No todods!</p>
        );
    } else {

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
                        <DeleteButton todo={todo}/>
                    </div>
                ))}
            </div>
        )
    }
}