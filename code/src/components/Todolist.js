import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'



const TodoList = () => {
    const items = useSelector((store) => store.todos.items)
    

    const dispatch = useDispatch()


    return (
        <div>
        {items.map((todo, index) => (
            <div key={todo.id} className="container">
                <p>{todo.description}</p>
                <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                />
                <button className="button" onClick={() => dispatch(todos.actions.removeTodo(index))}>Delete</button>
                </div>                
        ))}
        </div>     
    )
}

export default TodoList