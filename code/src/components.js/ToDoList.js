import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from 'reducers.js/todos';
import { Buttons } from './AddToDo';

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('toDoList'));
    if (todosFromLocalStorage) {
      dispatch(todos.actions.setupStore(todosFromLocalStorage))
    }
  }, [dispatch])
  const toDoList = useSelector((store) => store.todos.items);
  const onDeleteSingleToDoBtnClick = (id) => {
    dispatch(todos.actions.deleteSingleToDo(id));
  }
  const onIsDoneCheckboxToggle = (id) => {
    dispatch(todos.actions.toggleIfToDoIsDone(id));
  }
  return (
    <section>
      <section>
        {toDoList.map((singleToDo) => {
          return (
            <li key={singleToDo.id}>
              <p>
                <span>{singleToDo.name}</span>
                <Buttons delete type="button" onClick={() => onDeleteSingleToDoBtnClick(singleToDo.id)}> Remove</Buttons>
                <label htmlFor={`toDo_with_id${singleToDo.id}`}>
                  Is this one accomplished?
                  <input id={`toDo_with_id${singleToDo.id}`} type="checkbox" value={singleToDo.IsCaught} onChange={() => onIsDoneCheckboxToggle(singleToDo.id)} />
                </label>
              </p>
            </li>)
        })}
      </section>
    </section>
  )
}

export default ToDoList;