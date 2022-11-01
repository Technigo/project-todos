/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import moment from 'moment';

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  /* Mark task as completed */
  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id))
  }

  /* Delete task */
  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id))
  }

  return (
    <section>
      {items.length === 0
    && <div>
      <p>Empty Board!</p></div>}
      {items.map((item) => (
        <>
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => onToggleTask(item.id)} />
          </div><div>{item.text}</div>
          <div>
            <span>{moment(item.createdAt).fromNow()}</span>
            <button onClick={() => onDeleteTask(item.id)}>Clear!</button>
          </div>
        </>
      ))}
    </section>
  )
}

export default ToDoList;