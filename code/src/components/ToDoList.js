/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const ToDoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('toDoList'))
    if (listFromStorage) {
      dispatch(todos.actions.setAllItems(listFromStorage))
    }
  }, [])

  const toDoList = useSelector((store) => store.todos.items);

  const onToggleToDo = (id) => {
    dispatch(todos.actions.toggleToDo(id));
  }

  const onDeleteToDo = (id) => {
    dispatch(todos.actions.deleteToDo(id));
  }

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])

  return (
    <section>
      {toDoList.map((singleToDo) => {
        return (
          <article key={singleToDo.id}>
            <h2>{singleToDo.text}</h2>
            <input
              type="checkbox"
              checked={singleToDo.complete}
              onChange={() => onToggleToDo(singleToDo.id)} />
            <p>Created: {singleToDo.postedTime}</p>
            <button type="button" onClick={() => onDeleteToDo(singleToDo.id)}>X</button>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList