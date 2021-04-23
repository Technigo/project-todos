import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // to hook the items in the store

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items) // reach for the items from the store todos by using useSelector
    console.log(items) // now you can see the number of todo's in the console

    const dispatch = useDispatch() // always needed

    return (
        <div>
            {items.map(todo => (
                <div className="todo-item" key={todo.id} >
                    <label className="todo-item-container">                  
                        <input 
                            type="checkbox"
                            checked={todo.isComplete}
                            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                        />   
                        <span className="checkmark"></span>
                        <span className="label">{todo.description}</span>
                    </label>
                    <button className="remove-button" onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                        <span>&#9587;</span>
                    </button>
                </div>
            ))}
        </div>

    )
}

export default TodoList