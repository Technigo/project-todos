import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos';

const TodoList = () => {

  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter(singleTodo => singleTodo.isComplete);
  const addLabel = useSelector((store) => store.todos.addLabel);
  const dispatch = useDispatch();
    
    return (
      <div className="todo-container">
        <div className="todo-header">
          <h1>To do list</h1>
          <div className="completed-tasks">
            <p>Completed: {completedItems.length}/{items.length}</p>
          </div>
        </div>
        <div className="user-input">
          <input
            className="add-todo"
            placeholder="Add to do here "
            id="todoLabel"
            onChange={(e) => dispatch(todos.actions.setAddLabel(e.target.value))}
            value={addLabel}
          />
          <input 
            className="add-todo-button"
            type="button"
            value="add to do"
            onClick={() => {
              dispatch(todos.actions.addToDo()) 
            }}
          />
        </div>

        {items.map(todo =>  (
          <div className="user-output" key={todo.id}>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
            />
            <p className="todo-description">{todo.description}</p>
              <input
                className="delete-button"
                type="button"
                value="delete"
                onClick={() => dispatch(todos.actions.removeToDo(todo.id))}
                />
          </div>
        ))}
      </div>
    )
};

export default TodoList;