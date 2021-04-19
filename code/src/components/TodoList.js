import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todos } from '../reducers/todos'

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  // const wholeStore = useSelector((store) => store)

  
  return (
    <div>{items.map(todo => 
     <div key={todo.id}>
       <p>{todo.description}</p>
       <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
        />
     </div> 
     )}
    </div>
  )
}