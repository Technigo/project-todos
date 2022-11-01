/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const ListOfTodos = () => {
  const toDoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  return (
    <section>
      {toDoList.map((toDo) => {
        return (
          <article>
            <h2>{toDo.name}</h2>
            <label>Finished?
              <input type="checkbox" checked={toDo.isDone} onChange={() => onIsDoneToggle(toDo.id)} />
            </label>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  )
}

export default ListOfTodos