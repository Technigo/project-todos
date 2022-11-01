/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const TodoList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  return (
    <section className="todo-container">
      {allTodos.map((singleTodo) => {
        return (
          <article>
            <h2>{singleTodo.text}</h2>
            <label>Completed
              <input
                type="checkbox"
                checked={singleTodo.completed}
                onChange={() => onCompletedToggle(singleTodo.id)} />
            </label>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  )
}

/*
const TodoContainer = styled.section`
  margin: 20px;
` */