/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/task';
/* import styled from 'styled-components/macro'; */

const TaskList = () => {
  const dispatch = useDispatch();

  const taskList = useSelector((store) => store.tasks.items);

  const onIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex));
  }

  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <article key={singleTask.id}>
            <h2>{singleTask.name}</h2>
            <lable>Done with task?
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
            </lable>
            <button onClick={() => onDeleteTaskButtonClick(index)} type="button">🗑️</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;