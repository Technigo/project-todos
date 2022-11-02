/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();
  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleTodoItem(id))
  }
  return (
    <div>
      {todoList.map((singleTodo) => {
        return (
          <div>
            <h2>{singleTodo.name}</h2><input
              type="checkbox"
              checked={singleTodo.isDone}
              onChange={() => onIsDoneToggle(singleTodo.id)} /><label>is this done?</label><button type="button" className="btn btn-primary mb-2">Remove</button>
          </div>
        );
      })}
    </div>
  )
}

export default TodoList