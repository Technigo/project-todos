/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todo from 'reducers/todo'

const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items)

  const dispatch = useDispatch()

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id))
  }

  const onDeleteButtonClick =
  (todoIndex) => {
    dispatch(todo.actions.deleteItem(todoIndex))
  }

  return (
    <section>
      {todoList.map((singleTodo, index) => {
        return (
          <article>
            <h2>{singleTodo.name}</h2>
            <label>Is this todo completed
              <input
                type="checkbox"
                checked={singleTodo.isCompleted}
                onChange={() => onIsCompletedToggle(singleTodo.id)} />
            </label>
            <button
              onClick={() => onDeleteButtonClick(index)}
              type="button">X
            </button>
          </article>
        )
      })}
    </section>
  )
}
export default TodoList