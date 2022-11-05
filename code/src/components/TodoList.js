/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todos from 'reducers/todo'

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const onDeleteTodoButtonClick = (todoIndex) => {
    dispatch(todos.actions.deleteItem(todoIndex))
  }

  return (
    <section>
      <h2>Current tasks ({todoList.length})</h2>
      {todoList.map((singleTodo, index) => {
        return (
          <article key={singleTodo.id}>
            <p>{singleTodo.text}</p>
            <label>Done
              <input
                type="checkbox"
                checked={singleTodo.isDone}
                onChange={() => onIsDoneToggle(singleTodo.id)} />
            </label>
            <button onClick={() => onDeleteTodoButtonClick(index)} type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}

export default TodoList