/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const ToDoList = ({ id, complete }) => {
  const dispatch = useDispatch()
  const tasksList = useSelector((store) => store.tasks.list)

  // Function to read the change of checkbox
  const onTaskChangeToggle = () => {
    dispatch(
      tasks.actions.toogleComplete({ id, complete: !complete })
    );
  };
  return (
    <div>
      <h1>🦁🦁 To do list 🦁🦁</h1>
      {tasksList.map((item) => {
        return (
          <div className="toDoList" key={item.id}>
            <input
              type="checkbox"
              checked={complete}
              onChange={onTaskChangeToggle} />
            <label>{item.text}</label>
            <button className="removeTask" type="button" onClick={() => dispatch(tasks.actions.removeTask)}>Remove task</button>

          </div>
        )
      })}
    </div>

  )
}
