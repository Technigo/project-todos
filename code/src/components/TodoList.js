/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todo from 'reducers/todo';

const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items);
  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(todo.actions.toggleItem(id))
  }
  return (
    <section>
      {todoList.map((singleTodo) => {
        return (
          <label>
            <input
              type="checkbox"
              checked={singleTodo.isComplete}
              onChange={() => onIsCompleteToggle(singleTodo.id)} />
            <button type="button">X</button>
          </label>
        )
      })}
    </section>
  )
}

export default TodoList;