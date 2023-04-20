import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from 'reducers.js/todos';

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
      <ul>
        {toDoList.map((singleToDo) => {
          return (
            <li key={singleToDo.id}>
              <p>
                <span>{singleToDo.name}</span>
                <button type="button" onClick={() => onDeleteSingleToDoBtnClick(singleToDo.id)}> Delete this ToDo</button>
                <label htmlFor={`toDo_with_id${singleToDo.id}`}>
                  Is this one accomplished?
                  <input id={`toDo_with_id${singleToDo.id}`} type="checkbox" value={singleToDo.IsCaught} onChange={() => onIsDoneCheckboxToggle(singleToDo.id)} />
                </label>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default ToDoList;