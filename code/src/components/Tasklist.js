/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
// import ListItem from './ListItem';

const Tasklist = () => {
  const items = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();

  items.map((item) => console.log(item.text));

  return (
    <section className="task-list">
      {items.map((todo) => (
        <div className="list-item">
          <input type="radio" />
          <p>{todo.text}</p>
          <button
            onClick={() => dispatch(tasks.actions.deleteTask(todo))}
            type="button"
          >
            To remove
          </button>
        </div>
      ))}
    </section>
  );
};

export default Tasklist;
