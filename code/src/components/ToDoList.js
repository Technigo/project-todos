/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
// import { formatDistance } from 'date-fns';

const ToDoList = () => {
  const todoList = useSelector((store) => store.ToDo.items)
  const dispatch = useDispatch()

  const onIsCaughtToggle = (id) => {
    dispatch(ToDo.actions.toggleItem(id))
  }

  return (
    <section>
      {todoList.map((singleToDo) => {
        return (
          <article>
            <h2>{singleToDo.name}</h2>
            {/* <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p> */}
            <label>Is this todo done?
              <input
                type="checkbox"
                checked={singleToDo.isCaught}
                onChange={() => onIsCaughtToggle(singleToDo.id)} />
            </label>
            <button type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}
export default ToDoList