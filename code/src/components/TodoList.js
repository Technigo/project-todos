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
  const onDeleteTodoButtonClick = (todosIndex) => {
    dispatch(todos.actions.deleteTodoItem(todosIndex))
  }
  return (
    <div>
      {todoList.map((singleTodo, index) => {
        return (
          <div key={singleTodo.id}>
            <input
              type="checkbox"
              checked={singleTodo.isDone}
              className="strikethrough"
              onChange={() => onIsDoneToggle(singleTodo.id)} />
            <label className="strikethrough">{singleTodo.name}
            </label>
            <button onClick={() => onDeleteTodoButtonClick(index)} type="button" className="btn btn-warning">Remove</button>
          </div>
        );
      })}
    </div>
  )
}

export default TodoList