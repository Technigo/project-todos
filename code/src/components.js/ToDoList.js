/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from 'reducers.js/todos';
import { Buttons } from './AddToDo';
import { LeftToDo, NewToDoP, PTime, ToDoListBox } from './GlobalStyles';

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
              <ToDoListBox>
                <LeftToDo>
                  <input id={`toDo_with_id${singleToDo.id}`} type="checkbox" value={singleToDo.IsDone} onChange={() => onIsDoneCheckboxToggle(singleToDo.id)} />
                  <label htmlFor={`toDo_with_id${singleToDo.id}`} />
                  <NewToDoP>{singleToDo.name}</NewToDoP>
                  <PTime>Added: {singleToDo.createdAt}</PTime>
                </LeftToDo>
                <Buttons delete type="button" onClick={() => onDeleteSingleToDoBtnClick(singleToDo.id)}> Remove</Buttons>
              </ToDoListBox>
            </li>)
        })}
      </section>
    </section>
  )
}

export default ToDoList;