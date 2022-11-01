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
              {singleToDo.text}
            </h2>
            <label>Is this toDo done?
              <input type="checkbox" checked={singleToDo.complete} onChange={() => onCompleteToggle(singleToDo.id)} />
            </label>
            <button type="button">
							X
            </button>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList;