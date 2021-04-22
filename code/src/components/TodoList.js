/* eslint-disable */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)
      
    let count = 0
    const dispatch = useDispatch()
    
    return (
        <div>
            {items.map(todo => (
                <div key={todo.id} className="todo-item">
                    <p>{todo.description}</p>
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                    <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                        <span className="trash-item">🗑</span>   
                    </button>  
                    <div className="counter">
                        {todo.isComplete ? count = count: count+=1}

                    </div>

                </div>
            ))}

               
           

                    

            <p>You have {items.length} tasks on your todo list</p>   
            <p>Undone: {count}</p>

        </div>
    )
}

export default TodoList
