import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

const TodoList = () => {
  const todoList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <div className="List">
      <ul>
        {todoList.map((singleTodo) => {
          return (
            <div className="todo-row" key={singleTodo.id}>
              <label htmlFor="todo">
                <span>{singleTodo.content}</span>
                <input type="checkbox" id={singleTodo.id} name="todos" onChange={() => dispatch(tasks.actions.handleCheck(singleTodo))} />
              </label>
              <button type="button" onClick={() => dispatch(tasks.actions.removeItem(singleTodo))}>Delete</button>
            </div>
          )
        })}
        <button type="button" onClick={() => dispatch(tasks.actions.removeAll())}>Remove all tasks</button>
      </ul>
    </div>
  );
}

export default TodoList;
