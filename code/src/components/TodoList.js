import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
    console.log(items)

    const dispatch = useDispatch();


    return(
        <div className="list-container">
              {items.map((todo, index) => (
                  <div key={todo.id} className="todo-item">
                     <p>{todo.description}</p>
                     <input
                     type="checkbox"
                     checked={todo.isComplete}
                     onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                   />
                <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                Delete
                </button>
        </div>
        ))}
    </div>
  
    )
}

export default TodoList;