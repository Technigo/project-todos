/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos'
// import styled from 'styled-components';

const TaskList = () => {
  const taskList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch();

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <div>
            <label>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
            </label>
            <h2>{singleTask.text}</h2>
            <button type="button">X</button>
          </div>
        );
      })}
    </section>
  )
}

export default TaskList;

