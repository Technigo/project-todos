/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';

const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items);
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id))
  }

  return (
    <section>
      {todoList.map((singleToDo) => {
        return (
          <article>
            <h1>{singleToDo.task}</h1>
            <label> completed
              <input
                type="checkbox"
                checked={singleToDo.completed}
                onChange={() => onCompletedToggle(singleToDo.id)} />
            </label>
            <button onClick={() => dispatch(todo.actions.deleteItem(singleToDo.id))} type="button">❌</button>
          </article>
        );
      })}
    </section>
  )
}
export default TodoList;