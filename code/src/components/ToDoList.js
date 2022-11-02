/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items);

  const dispatch = useDispatch();
  const onCompleteToggle = (id) => {
    dispatch(toDos.actions.toggleItem(id));
  }

  return (
    <section>
      {toDoList.map((singleToDo) => {
        return (
          <article>
            <h2>
              {singleToDo.name}
            </h2>
            <label>
              <input type="checkbox" checked={singleToDo.complete} onChange={() => onCompleteToggle(singleToDo.id)} />
            </label>
            <button type="button" className="deleted-btn" onClick={() => dispatch(toDos.actions.removeItem(singleToDo.id))}>Remove a task</button>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList;